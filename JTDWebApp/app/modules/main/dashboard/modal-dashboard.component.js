export const modalDashboardComponent = {
    bindings: {
        resolve: '<',
        close: '&',
        dismiss: '&'
    },
    template: require('./modal-dashboard.html'),
    controller: ['$scope', '$http', '$injector', function ($scope, $http, $injector) {

        var dashboardService = $injector.get("dashboardService");
        var oneTranslateFact = $injector.get('oneTranslateFact');
        var $filter = $injector.get("$filter");

        $scope.dashboard = this.resolve.dashboard.data;
        $scope.modalInstance = this;

        $scope.modelToPost = {};
        $scope.modelToPost.Widgets = [];
        $scope.IdUser = this.resolve.user;

        $scope.listData = [
            {
                id: 0, active: false, title: oneTranslateFact.translate('lblChartAdrRevparOcc'), code: "chartadrrevparocc", chartC3: true,
                description: oneTranslateFact.translate('msgGraphThatDisplaysABarChartWithHotelOccupancyALineIndicatingTheAdrAverageDailyRateAndAnotherLineIndicatingTheRevparRevenuePerAvailableRoom'),
                dataConfig: {
                    axes: { ADR: 'y2', RevPar: 'y2' },
                    x: 'x',
                    types: { ADR: 'line', RevPar: 'line', OCUP: 'bar' }
                },
                config: {
                    axis: {
                        x: {
                            label: { text: 'Months', position: 'outer-center' },
                            type: 'timeseries',
                            tick: { format: '%m-%Y' }
                        },
                        y: { show: true, label: { text: oneTranslateFact.translate('lblOCCPercent'), position: 'outer-middle' } },
                        y2: { show: true, label: { text: oneTranslateFact.translate('lblADRRevParValue'), position: 'outer-middle' } }
                    },
                    tooltip: {
                        format: {
                            value: function (value, ratio, id) {
                                if (id === oneTranslateFact.translate('lblOCC')) {
                                    var formatN = window.d3.format('.2%');
            
                                    return formatN(value / 100);
                                } else {
                                    var format = window.d3.format('$.2f');
            
                                    return format(value);
                                }
                            }
                        }
                    }
                },
                data: [
                    ['x', '2016-02-01', '2016-03-01', '2016-04-01', '2016-05-01', '2016-06-01', '2016-07-01'],
                    [oneTranslateFact.translate('lblADR'), 60, 70, 75, 50, 55, 60],
                    ['RevPar', 50, 60, 65, 40, 50, 55],
                    [oneTranslateFact.translate('lblOCC'), 70, 50, 45, 80, 85, 90]
                ]
            },
            {
                id: 0, active: false, title: oneTranslateFact.translate('lblOCC'), code: "occ", chartC3: true,
                description: oneTranslateFact.translate('msgDonutChartWithCurrentHotelOccupation'),
                dataConfig: {
                    axes: { ADR: 'y2', RevPar: 'y2' },
                    type: 'gauge'
                },
                config: {
                    tooltip: {
                        format: {
                            value: function (value) {
                                var format = window.d3.format('.2%');
                                return format(value / 100);
                            }
                        }
                    },
                    gauge: {
                        label: {
                            format: function(value) {
                                var f = window.d3.format('.2%');
                                return f(value / 100);
                            }
                        }
                    }
                },
                data: [
                    [oneTranslateFact.translate('lblOCC'), 18]
                ]
            },
            {
                id: 0, active: false, title: oneTranslateFact.translate('lblADR'), code: "adr", chartC3: false, value: '$145',
                description: oneTranslateFact.translate('msgAverageDailyRateIndicator')
            },
            {
                id: 0, active: false, title: oneTranslateFact.translate('lblRevPar'), code: "revpar", chartC3: false, value: '$128',
                description: oneTranslateFact.translate('msgRevenuePerAvailableRoomIndicator'), mediumSize: false, showLink: false
            },
            {
                id: 0, active: false, title: oneTranslateFact.translate('lblExpiredCheckOut'), code: "ckoutexpired", chartC3: false, value: '20',
                description: oneTranslateFact.translate('msgCheckoutExpiredIndicator'), mediumSize: true, showLink: true
            },
            {
                id: 0, active: false, title: oneTranslateFact.translate('lblblockedReservationsToExpire'), code: "blockedReservationsToExpire", chartC3: false, value: '20',
                description: oneTranslateFact.translate('lblblockedReservationsToExpireDesc'), mediumSize: true, showLink: true
            },
            {
                id: 0, active: false, title: oneTranslateFact.translate('lblNegotiationIn90Days'), code: "negotiations90Days", chartC3: false, value: '5',
                description: oneTranslateFact.translate('lblNegotiates90DaysClosure'), mediumSize: true, showLink: true
            }
        ];

        var selectWidget = function (item) {
            var addDashboard = {};
            addDashboard.Code = item.code;
            addDashboard.X = 0;
            addDashboard.Y = 0;
            addDashboard.W = 2;
            addDashboard.H = 2;
            addDashboard.IdUser = $scope.IdUser; // pode pegar o IdUser pelo backend
            addDashboard.Active = item.active;
            addDashboard.IdDashboardItem = item.id;

            $scope.modelToPost.Widgets.push(addDashboard);
        };

        var items = $scope.dashboard;
        if ((!items) || (!angular.isObject(items))) {
            items = [];
        }

        for (var j = 0; j < $scope.listData.length; j++) {
            var item = $filter('filter')(items, { T: $scope.listData[j].code }, true);

            if (item.length === 1) {
                $scope.listData[j].active = true;
                $scope.listData[j].id = item[0].Id;
                selectWidget($scope.listData[j]);
            }
        }

        var removeWidget = function (item) {
            var removeItem = $filter('filter')($scope.modelToPost.Widgets, { Code: item.code }, true);

            if (removeItem.length === 1)
                removeItem[0].Active = false;
        };

        $scope.changeActive = function (item) {
            item.active = !item.active;

            if (item.active)
                selectWidget(item);
            else
                removeWidget(item);
        };

        $scope.saveWidgets = function () {
            var createItems = $filter('filter')($scope.modelToPost.Widgets, { Active: true }, true);
            var removeItems = $filter('filter')($scope.modelToPost.Widgets, { Active: false }, true);
            var model = { CreateWidgets: createItems, DeleteWidgets: removeItems };

            dashboardService.createWidgets(model).then(function () {
                $scope.modalInstance.close({ $value: $scope.modelToPost });
            }, function (error) {
                throw error;
            });
        };

        $scope.cancel = function () {
            $scope.modalInstance.close();
        };
    }]
};
