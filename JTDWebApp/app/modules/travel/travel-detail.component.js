import angular from "angular";

export const travelDetailComponent = {
    bindings: {
        dados: '<'
    },
    template: require('./travel-detail.html'),
    controller: ['$scope', '$stateParams', 'travelServices', '$state',
        ($scope, $stateParams, travelServices, $state) => {

            var scopeId = $stateParams.id;
            if (scopeId != 0)
                travelServices.getTravel(scopedId)
                    .success(rs => $scope.travel = rs);

            $scope.cancel = () => $state.go('travels.list');

            $scope.user = {
                title: 'Developer',
                email: 'ipsum@lorem.com',
                firstName: '',
                lastName: '',
                company: 'Google',
                address: '1600 Amphitheatre Pkwy',
                city: 'Mountain View',
                state: 'CA',
                biography: 'Loves kittens, snowboarding, and can type at 130 WPM.\n\nAnd rumor has it she bouldered up Castle Craig!',
                postalCode: '94043'
            };

            $scope.states = ('AL AK AZ AR CA CO CT DE FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS ' +
                'MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI ' +
                'WY').split(' ').map(function (state) {
                    return { abbrev: state };
                });

        }],
};