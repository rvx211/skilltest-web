var app = angular.module('SimpleNote', ['ngRoute', 'ngCookies']);

(function () {
    'use strict';
 
    app.config(config).run(run);
 
    config.$inject = ['$routeProvider', '$locationProvider'];
    function config($routeProvider, $locationProvider) {
        $routeProvider.when('/',{
            templateUrl : 'views/login.html',
            controller : 'LoginController',
            controllerAs: 'vm'
        }).when('/register',{
            templateUrl : 'views/register.html',
            controller : 'RegisterController',
            controllerAs: 'vm'
        }).when('/home',{
            templateUrl : 'views/home.html',
            controller : 'HomeController',
            controllerAs: 'vm'  
        }).when('/view',{
            templateUrl : 'views/view.html',
            controller : 'ViewController',
            controllerAs: 'vm'  
        }).when('/edit',{
            templateUrl : 'views/edit.html',
            controller : 'EditController',
            controllerAs: 'vm'  
        }).otherwise({
            redirectTo : '/'
        })
    }
 
    run.$inject = ['$rootScope', '$location', '$cookieStore', '$http'];
    function run($rootScope, $location, $cookieStore, $http) {
        // keep user logged in after page refresh
        $rootScope.globals = $cookieStore.get('globals') || {};
        if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
        }
 
        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            // redirect to login page if not logged in and trying to access a restricted page
            var restrictedPage = $.inArray($location.path(), ['/', '/register']) === -1;
            var loggedIn = $rootScope.globals.currentUser;
            if (restrictedPage && !loggedIn) {
                $location.path('/');
            }
        });
    }
 
})();
