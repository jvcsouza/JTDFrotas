export const dashboardComponent = {
    template: require('./dashboard.html'),
    controller: ['$scope', '$injector', function ($scope, $injector) {

        var oneTranslateFact = $injector.get('oneTranslateFact');
        var dashboardService = $injector.get("dashboardOccupationService");
        var blockUi = $injector.get('blockUI');

        $scope.dataConfig = {
            axes: { ADR: 'y2', RevPar: 'y2' },
            x: 'x',
            type: 'bar',
            types: { ADR: 'line', RevPar: 'line' }
        };

        $scope.dataConfigDonut = { type: 'donut' };

        $scope.config = {
            axis: {
                x: {
                    label: { text: 'Months', position: 'outer-center' },
                    type: 'timeseries',
                    tick: { format: '%m-%Y' }
                },
                y: { show: true, label: { text: oneTranslateFact.translate('lblOCCPercent'), position: 'outer-middle' } },
                y2: { show: true, label: { text: oneTranslateFact.translate('lblADRRevParValue'), position: 'outer-middle' } }
            }
        };

        $scope.configDonut = {};

        $scope.data = [
            ['x', '', '', '', '', '', '', '', '', '', '', '', ''],
            [oneTranslateFact.translate('lblADR'), 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            ['RevPar', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [oneTranslateFact.translate('lblOCC'), 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ];

        $scope.dataDonut = [
            [oneTranslateFact.translate('lblRemaining'), 0],
            [oneTranslateFact.translate('lblOCC'), 0]
        ];

        $scope.dataAdrRevparCurrentYear = [];

        $scope.initialize = function () {
            blockUi.start(window.Translate('msgWaiting'));
            dashboardService.getRestful().then(function (response) {

                $scope.data = response.data.dataLastMonths;
                $scope.dataDonut = response.data.dataCurrentYear;
                $scope.dataAdrRevparCurrentYear = response.data.dataAdrRevparCurrentYear;

            }, function (error) {
                throw error;
            }).finally(function () {
                blockUi.stop();
            });
        };
    }]
};
