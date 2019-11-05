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
                console.log("GET");
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
                return data;
            },
            request: (config) => {
                config.headers.token = "JKOHFSUIOFHIOASFNOPSM";
                console.log(config);
                return config;
            }
        }
    });     
}