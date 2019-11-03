export const enableSupportComponent = {
    bindings: {
        resolve: '<',
        close: '&',
        dismiss: '&'
    },
    template: require('./enable-support.html'),
    controller: ['$scope', '$injector', function($scope, $injector) {
        var modalInstance = this;

        var enableSupportService = $injector.get("enableSupportService");


        enableSupportService.get().then(function(response) {
            $scope.users = response.data;
        });

        $scope.selectUser = function (user) {
            enableSupportService.enable(user).then(function() {
                modalInstance.close({ $value: 'confirm' });
            }, function(error) {
                throw error;
            });
        };

        $scope.cancel = function () {
            modalInstance.dismiss({ $value: 'cancel' });
        };
    }]
};
