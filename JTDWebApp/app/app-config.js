export const setHtml5Mode = ($locationProvider) => $locationProvider.html5Mode(true);

blockUIConfig.$inject = ['blockUIConfig'];
export function blockUIConfig(blockUiConfig) {
    // Change the default overlay message
    blockUiConfig.message = '';

    // Change the default delay to 100ms before the blocking is visible
    blockUiConfig.delay = 500;

    blockUiConfig.requestFilter = function (config) {
        switch (config.method) {
            case 'GET':
                window.EasyLoading.show({
                    text: "Getting...",
                    type: window.EasyLoading.TYPE.BALL_SCALE_MULTIPLE,
                    button: null
                });
                break;
            case 'POST':
                console.log("POST");
                break;

            case 'DELETE':
                console.log("DELETE");
                break;

            case 'PUT':
                console.log("PUT");
                break;

            default:
                console.log("EUEM");
        };
    };
};

exceptionConfig.$inject = ['$provide'];
export function exceptionConfig($provide) {
    window.t = $provide;
    $provide.decorator('$exceptionHandler', ['$log', '$delegate', '$injector', function ($log, $delegate, $injector) {
        return function (exception, cause) {
            $log.debug('Default exception handler.');
            $delegate(exception, cause);
        }
    }]);
};

Interceptor.$inject = ['$httpProvider'];
export function Interceptor($httpProvider) {
    $httpProvider.useApplyAsync(true);
    $httpProvider.interceptors.push(() => {
        return {
            'response': (data) => {
                window.EasyLoading.hide();
                return data;
            },
            'request': (config) => {
                window.EasyLoading.show({
                    text: "Loading...",
                    type: window.EasyLoading.TYPE.BALL_SCALE_MULTIPLE,
                    button: null
                });
                config.headers.token = "JKOHFSUIOFHIOASFNOPSM";
                return config;
            },
            'requestError': (err) => {
                window.EasyLoading.hide();
                window.Swal.fire({
                    title: 'Oops... Algo deu errado!',
                    html: err.data.Message,
                    icon: 'error',
                });
                throw err;
            },
            'responseError': (err) => {
                window.EasyLoading.hide();
                window.Swal.fire({
                    title: 'Oops... Algo deu errado!',
                    html: err.data.Message,
                    icon: 'error',
                });
                throw err;
            }
        }
    });
}