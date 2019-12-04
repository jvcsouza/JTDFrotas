import angular from "angular";

export const travelDetailComponent = {
  bindings: {
    dados: "<"
  },
  template: require("./travel-detail.html"),
  controller: [
    "$scope",
    "$stateParams",
    "travelServices",
    "$state",
    "companyServices",
    ($scope, $stateParams, travelServices, $state, companyServices) => {
      var divMap = document.getElementById("map");
      var directionsService = {};
      var directionsRenderer = {};
      $scope.travel = {};
      $scope.cityList = {};
      var places = {};
      $scope.card = {};
      var scopeId = $stateParams.id;
      const Toast = Swal.mixin({
        toast: true,
        position: "bottom",
        showConfirmButton: false,
        timer: 3000
      });

      //#region AutoComplete
      var options = {
        url: phrase => "api/Company/GetCompaniesWithParams/" + phrase,
        getValue: "Name",
        ajaxSettings: {
          dataType: "json",
          method: "GET",
          data: {
            dataType: "json"
          }
        },
        theme: "plate-dark",
        requestDelay: 200,
        list: {
          onChooseEvent: function() {
            var client = $("#client").getSelectedItemData();
            places.client = client;
            $scope.card.Company = client.Name;
            $scope.company = client.Name;
            $scope.$apply();
          }
        }
      };

      var callbackOrigin = () => {
        places.origin = $("#orig").getSelectedItemData();
        $scope.origin = places.origin.Name;
        $scope.$apply();
      };

      var callbackDestination = () => {
        places.destiny = $("#destination").getSelectedItemData();
        $scope.destiny = places.destiny.Name;
        $scope.$apply();
      };

      var optionsCity = {
        url: phrase => "api/city/GetCityAutoComplete/" + phrase,
        getValue: "Name",
        ajaxSettings: {
          dataType: "json",
          method: "GET",
          data: {
            dataType: "json"
          }
        },
        theme: "plate-dark",
        requestDelay: 200
      };

      optionsCity.list = { onChooseEvent: callbackDestination };
      $("#destination").easyAutocomplete(optionsCity);

      var copy = angular.copy(optionsCity);
      copy.list = { onChooseEvent: callbackOrigin };
      $("#orig").easyAutocomplete(copy);

      $("#client").easyAutocomplete(options);
      //#endregion

      if (scopeId != 0)
        travelServices.getTravel(scopeId).success(rs => ($scope.travel = rs));

      $scope.initMap = () => {
        directionsService = new window.google.maps.DirectionsService();
        directionsRenderer = new window.google.maps.DirectionsRenderer();
        var map = new window.google.maps.Map(divMap, {
          zoom: 7,
          center: { lat: -9.655412, lng: -54.601049 }
        });
        directionsRenderer.setMap(map);

        $("#map").animate({ width: "100%", height: "100%" });
      };

      $scope.updateMaps = _ => {
        var origin = `${places.origin.Name}, ${places.origin.Initials}`;
        var destiny = `${places.destiny.Name}, ${places.destiny.Initials}`;

        travelServices.GetDirections({ origin, destiny }).success(function(r) {
          var request = {
            origin: new window.google.maps.LatLng(
              r.StartAddress.Lat,
              r.StartAddress.Long
            ),
            destination: new window.google.maps.LatLng(
              r.EndAddress.Lat,
              r.EndAddress.Long
            ),
            travelMode: "DRIVING"
          };

          places.duration = r.Duration;
          places.km = r.Distance;

          $scope.card = {
            Destiny: r.Destiny,
            Origin: r.Origin,
            Duration: r.Duration,
            Distance: r.Distance,
            Company: $scope.company
          };

          directionsService.route(request, (response, status) => {
            if (status === "OK") directionsRenderer.setDirections(response);
          });
        });

        if (scopeId == 0) {
          travelServices
            .saveTravel({
              Id: 0,
              PersonId: places.client.Id,
              OriginId: places.origin.Id,
              DestinyId: places.destiny.Id,
              TotalKm: places.km,
              DurationStr: places.duration
            })
            .success(travel => {
              $state.go("travels.detail", { id: travel.Id });
            });
        }
      };

      $scope.cancel = () => $state.go("travels.list");

      var searchCNPJ = cnpj =>
        companyServices.searchCnpj(cnpj).then(rs => {
          if (!rs) throw rs;
          return rs;
        });

      var saveCompany = company =>
        companyServices.saveCompany(company).then(rs => {
          Toast.fire({
            icon: "success",
            title: "Operacao Concluida!"
          });
          return rs;
        });

      var removePointsAndTraces = value => value.replace(/[\.\-//]?/g, "");

      var CNPJIsValid = value => {
        var cnpj = removePointsAndTraces(value);

        if (/[\D]/g.test(cnpj)) return "O CNPJ deve conter apenas numeros.";

        if (cnpj.length !== 14)
          return "O valor informado nao e um CNPJ valido.";
      };

      $scope.openModalCnpj = () => {
        Swal.fire({
          title: "Informe o CNPJ da empresa abaixo: ",
          input: "text",
          inputAttributes: {
            autocapitalize: "off",
            "ui-br-cnpj-mask": "ui-br-cnpj-mask",
            "max-length": 18
          },
          customClass: {
            input: "ml-5 mr-5 w-75"
          },
          showCancelButton: true,
          confirmButtonText: "Buscar",
          showLoaderOnConfirm: true,
          inputValidator: CNPJIsValid,
          preConfirm: searchCNPJ,
          allowOutsideClick: () => !Swal.isLoading()
        }).then(result => {
          if (angular.isDefined(result.value) && result.value.status === 200) {
            Swal.fire({
              title: `CNPJ Encontrado!`,
              text: `${result.value.data.FantasyName ||
                result.value.data.Person.Name}`,
              icon: "info",
              showCancelButton: true,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              cancelButtonText: "Esta errado, quero cancelar.",
              confirmButtonText: "Esta correto, pode salvar.",
              preConfirm: () => saveCompany(result.value.data)
            });
          }
        });
      };
      $scope.initMap();
    }
  ]
};
