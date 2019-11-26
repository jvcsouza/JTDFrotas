import angular from "angular";

export const travelDetailComponent = {
    bindings: {
        dados: '<'
    },
    template: require('./travel-detail.html'),
    controller: ['$scope', '$stateParams', 'travelServices', '$state',
        ($scope, $stateParams, travelServices, $state) => {

            var divMap = document.getElementById('map');
            var directionsService = {};
            var directionsRenderer = {};
            $scope.travel = {};

            var scopeId = $stateParams.id;
            if (scopeId != 0)
                travelServices.getTravel(scopedId)
                    .success(rs => $scope.travel = rs);

            $scope.initMap = () => {
                directionsService = new window.google.maps.DirectionsService();
                directionsRenderer = new window.google.maps.DirectionsRenderer();
                var map = new window.google.maps.Map(divMap, {
                    zoom: 7,
                    center: { lat: 41.85, lng: -87.65 }
                });
                directionsRenderer.setMap(map);

                $('#map').animate({ width: '100%', height: '100%' });
            }

            $scope.updateMaps = (origin, destiny) => {

                var request = {
                    origin: new window.google.maps.LatLng(origin.lat, origin.lng),
                    destination: new window.google.maps.LatLng(destiny.lat, destiny.lng),
                    travelMode: 'DRIVING'
                }

                directionsService.route(request, (response, status) => {
                    if (status === 'OK')
                        directionsRenderer.setDirections(response);
                });
            }

            $scope.cancel = () => $state.go('travels.list');

            var searchCNPJ = (cnpj) =>
                companyServices.searchCnpj(cnpj)
                    .then(rs => {
                        if (!rs)
                            throw rs;
                        return rs;
                    });

            var saveCompany = company =>
                companyServices.saveCompany(company)
                    .then(rs => {
                        Toast.fire({
                            icon: "success",
                            title: "Operacao Concluida!",
                        });
                        getCompanies();
                        return rs;
                    });

            var CNPJIsValid = (value) => {
                var cnpj = value.replace(/[\.\-//]?/g, '');

                if (/[\D]/g.test(cnpj))
                    return 'O CNPJ deve conter apenas numeros.';

                if (cnpj.length !== 14)
                    return 'O valor informado nao e um CNPJ valido.';
            };

            $scope.openModalCnpj = () => {
                Swal.fire({
                    title: 'Informe o CNPJ da empresa abaixo: ',
                    input: 'text',
                    inputAttributes: {
                        autocapitalize: 'off',
                        'ui-br-cnpj-mask': 'ui-br-cnpj-mask',
                        'max-length': 18
                    },
                    customClass: {
                        input: 'ml-5 mr-5 w-75'
                    },
                    showCancelButton: true,
                    confirmButtonText: 'Buscar',
                    showLoaderOnConfirm: true,
                    inputValidator: CNPJIsValid,
                    preConfirm: searchCNPJ,
                    allowOutsideClick: () => !Swal.isLoading()
                })
                    .then((result) => {
                        if (result.value.status === 200) {
                            Swal.fire({
                                title: `CNPJ Encontrado!`,
                                text: `${result.value.data.FantasyName || result.value.data.Person.Name}`,
                                icon: 'info',
                                showCancelButton: true,
                                confirmButtonColor: '#3085d6',
                                cancelButtonColor: '#d33',
                                cancelButtonText: 'Esta errado, quero cancelar.',
                                confirmButtonText: 'Esta correto, pode salvar.',
                                preConfirm: () => saveCompany(result.value.data),
                            });
                        }
                    })
            }
        }],
};