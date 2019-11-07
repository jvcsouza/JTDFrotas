import angular from "angular";

export const guestListComponent = {
    template: require('./guest-list.html'),
    controller: ['$scope', 'guestServices', ($scope, guestServices) => {
        $scope.hello = "Hello";

        // console.log(guestServices);

        $scope.teste = (t) => alert("Editando usuario: " + t);

        guestServices.getGuests()
            .success(r => $scope.guests = r);
    }]
};