export const setHtml5Mode = ($locationProvider) => $locationProvider.html5Mode(true);

blockUIConfig.$inject = ['blockUIConfig'];
export function blockUIConfig(blockUiConfig) {
    // Change the default overlay message
    blockUiConfig.message = 'alo';

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

export function Interceptor($httpProvider) {
    $httpProvider.interceptors.push(() => {
        return {
            response: (data) => {
                window.EasyLoading.hide();
                return data;

            },
            request: (config) => {
                window.EasyLoading.show({
                    text: "Loading...",
                    type: window.EasyLoading.TYPE.BALL_SCALE_MULTIPLE,
                    button: null
                });
                //window.$('#containerAll').preloader();
                config.headers.token = "JKOHFSUIOFHIOASFNOPSM";
                return config;
            },
            responseError: (config) => {
                console.log(config);
                window.EasyLoading.hide();
                window.x0popup({
                    type: 'info',
                    html: false,
                    overlay: true,
                    theme: 'default',
                    title: config.data.Title,
                    text: config.data.Message,
                    autoClose: 5000,
                    animation: true,
                    animationType: 'fadeIn',
                    buttons: null,
                    overlayAnimation: true,
                });
                return config;
            }
        }
    });
}