app.config(function($routeProvider){
  $routeProvider.when('/',{
    templateUrl : 'views/login.html',
    controller : 'LoginController'
  })
  .when('/register',{
    templateUrl : 'views/register.html',
    controller : 'RegisterController'  
  })
  .when('/home',{
    templateUrl : 'views/home.html',
    controller : 'HomeController'  
  })
  .when('/view',{
    templateUrl : 'views/view.html',
    controller : 'ViewController'  
  })
  .when('/edit',{
    templateUrl : 'views/edit.html',
    controller : 'EditController'  
  })
  .otherwise({
    redirectTo : '/'
  })
});