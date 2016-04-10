routing.$inject = ['$locationProvider', '$stateProvider', '$urlRouterProvider', '$mdThemingProvider'];

export default function AppConfig(
    $locationProvider,  $stateProvider, $urlRouterProvider, $mdThemingProvider
) {

    $mdThemingProvider.theme('default')
        .primaryPalette('blue')
        .accentPalette('red');

    $locationProvider.hashPrefix('!');
    $locationProvider.html5Mode(true);

    $urlRouterProvider
        .otherwise('/');

    $stateProvider
        .state('app', {
            url: '/',
            templateUrl: require('./'),
            controller: 'IndexCtrl'
        })
}