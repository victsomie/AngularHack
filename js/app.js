$(document).foundation();


(function (){
    
    // Below we create  module named 'store'
    var app = angular.module("store", []);
    
    
    // To the module 'store' we add a controller named 'SimpleController'
    app.controller('SimpleController', [function(){
        this.students = [
            {name: 'Maureen Kerubo', course: 'BBIT'},
            {name: 'Kim Jone Siwa', course: 'Comp Sc.'},
            {name: 'Jane Kamande', course: 'Comp Engineering'},
            {name: 'Dennis Ettary', course: 'Graphics Design'},
            {name: 'Evans Ngure', course: 'Maths for Science'}
        ];
    }]);
    
    
    
    // Adding multiple controllers
    var controllers = {};
    controllers.testController = function ($scope){
            $scope.members = [
                {firstName : 'Peter',secondName : 'Habert',location :'Turkey'},
                {firstName : 'James',secondName : 'Odongo',location :'Mombasa'}
            ];
        };
    
    app.controller(controllers);
    
    
    
    // Routing 
    /*
    app.config('routeProvider', [function ($routeProvider){
               
               $routeProvider
               .when('/', 
                    {
                        controller: 'SimpleController',
                        templateUrl: 'pages/teacher.html'
                    })
                .when('/pages',
                      {
                        controller: 'SimpleController',
                        templateUrl:  'teachers.html'
                    })
                .otherwise({ 
                        redirectTo: '/'
                    });
               
    }]); // app.config end
    */
 
})();


