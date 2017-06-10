$(document).foundation();

// Below we create  module named 'store'
var app = angular.module("store", ['ngRoute']);

app.constant("baseUrl", "http://127.0.0.1:58548/index.html");



//// / CUSTOM A DIRECTIVE ==============
app.directive("welcome", function() {
  return {
    restrict: "E",
    template: " "
      + "<div style='background:yellow'>Howdy there! You look splendid.</div>" 
      + "<p class='container'>This is really awesome!</p>"
      + "<p>Really awesome {{images}}</p>"
  }
});
// To the module 'store' we add a controller named 'SimpleController'
app.controller('SimpleController', function($scope, simpleFactory){

   

});     



// To the module 'store' we add a controller named 'SimpleController'
app.controller('studentController', function($scope, simpleFactory, $routeParams){

    $scope.students = simpleFactory.getStudents();
    $scope.driversDB = simpleFactory.getNames();
    //                $scope.studentsSize = $scope.students[$scope.studentName];

    // Specific student using the selected id
    var studentIndexInTheArray = $routeParams.studentIndex;
    $scope.specificStudent = $scope.students[studentIndexInTheArray];

    var indexByNameClick =$routeParams.studentName;
    $scope.specificStudentTest = $scope.students[indexByNameClick];
});


// Adding multiple controllers
var controllers = {};

controllers.SimpleController = function($scope, simpleFactory, $route){
    $scope.students = simpleFactory.getStudents();
    $scope.studentsNumber = $scope.students.length;
    $scope.dataFromRoute = $route.current.myText;
    
    $scope.myDelays = 1000;
    $scope.myDelaysIncreament = function(whatToIncreamentWith){
        return $scope.myDelays + (whatToIncreamentWith *300); 
    }
    
    
}

// Creating a factory
app.factory('simpleFactory', function($http, $route){
    // NB: You could do your calls for external data here now
     // Create an empty factory object
    var factory = {}; // This is what we will return
    
    
    var testimonials = [
        {who: "James Edmond", from: "Cairo", content: "We have <br>loved your work"},
        {who: "Lonny Pascal", from: "Johannesberg", content: "Some real good stuff there. "},
    ]; 

   
    // Create the methods to do 'stuff' - under the factory object created
    factory.getTestimonials = function(){
        return testimonials;
    };

    //////////////// STUDENTS HERE ///////////////
    var students = [
        {name: 'Maureen Kerubo', course: 'BBIT', pp: 'dfdfdfdf',
         unitsTaken: [
             "Intro. to comp", "Organizationl behavior"
         ]
        },
        {name: 'Kim Jone Siwa', course: 'Comp Sc.', unitsTaken: [
            "Biology", "Zoology", "Bootany", "Physics", "Bbabsbsd", "Kisw"
        ]
        
        },
        {name: 'Jane Kamande', course: 'Comp Engineering'},
        {name: 'Dennis Ettary', course: 'Graphics Design'},
        {name: 'Evans Ngure', course: 'Maths for Science'}

    ];

    // Moved the students list to a factory
    factory.getStudents = function(){            
        return students;
    }
    
    

        // ==================  eargest.com ==================
    
    //var eargest ="http://ergast.com/api/f1/2013/driverStandings.json?callback=JSON_CALLBACK";
    //var eargest ="api.openweathermap.org/data/2.5/forecast?id=524901&APPID=53459d61d9a22d804fcbf79ecc3224c6/weather?lat=35&lon=139";
    //var eargest ="http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&APPID=53459d61d9a22d804fcbf79ecc3224c6";
    var eargest ="http://api.openweathermap.org/data/2.5/weather?zip=94040&APPID=53459d61d9a22d804fcbf79ecc3224c6";
    var drivers = {};
    $http.jsonp(eargest).success(function(response){
        // drivers = response.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver;
        drivers = response.weather[0];
    }).error(function(error){
        drivers  = {dd:"ff"};
        
    });
    
        
    var names = [{name: 'Maureen Kerubo', course: 'BBIT', pp: 'dfdfdfdf'}];
    // var ergastAPI = [{dd:'232323'}];
      
    factory.getNames = function(){
        return drivers; 
    };
        
    
    var ergastAPIxx = [];
    factory.getNamesxx = function() {
      return $http({
      	method: 'JSONP', 
      	url: 'http://ergast.com/api/f1/2013/driverStandings.json?callback=JSON_CALLBACK'
      });
    };
    
    return factory;

});

// Note that simpleFactory (a factory is put in here)
controllers.testController = function ($scope, $route, simpleFactory, $http ){

    // $scope.testimonials = []; 

    // Adding JSON data from an external file
    // NB: include $http as parameter in this function
    var url="data.txt";
    $http.get(url).success( function(response) {

        // Get the JSON file containing your data (in our case testmonials)
        $scope.testimonials = response;

        // Combine (concat) the data from external file with the one from 'factory'
        $scope.testimonials =$scope.testimonials.concat($scope.testimonialsFromFactory);
    });
    
    
    $scope.marks = [10, 30, 40, 50];
    var total = 0;
    // $scope.marksLength = $scope.marks.length;

    $scope.marksTotal = function(){
         $scope.sum = 0;
            
        for(var x = 0; x< $scope.marks.length; x++){
            $scope.sum = $scope.sum +$scope.marks[x];
            // console.log("This is>>" + $scope.sum);
        }
        
        return $scope.sum;
    
    };
    

    $scope.members = [
        {firstName : 'Peter',secondName : 'Habert',location :'Turkey'},
        {firstName : 'James',secondName : 'Odongo',location :'Mombasa'}
    ];
    $scope.images = [
        {name: 'Esther Raw', photo : 'img/eswithfriend.jpg'},
        {name: 'Esther Edited', photo : 'img/eswithfriend2.jpg'},                        
        {name: 'Esther Raw', photo : 'img/eswithfriend.jpg'},
        {name: 'Esther Raw', photo : 'img/eswithfriend2.jpg'},
        {name: 'Newest Image', photo : 'img/eswithfriend.jpg'}
        
    ];



    // $scope.testimonials = []; 

    // Getting data from factory
    $scope.testimonialsFromFactory = simpleFactory.getTestimonials(); 

    // $scope.testimonials2 = simpleFactory.getTestimonials(); 
    // $scope.testimonials = $scope.testimonials.concat($scope.testimonials2);

    // You could create testimonials this way too   
    /*
    init();
    function init(){
    $scope.testimonials = simpleFactory.getTestimonials(); 
    }
    */


    $scope.addTestimonial = function (){
    $scope.testimonials.push(
        {
            who: $scope.newTestimonial.who,
            from: $scope.newTestimonial.from,
            content: $scope.newTestimonial.content
        }
    );
    };
};

app.controller(controllers);


    
// CONFIG ROUTING etc
app.constant("baseUrl","http://127.0.0.1:51595/index.html"); // NB: its NOT a key-value pair

app.config(['$routeProvider', '$locationProvider',
function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'gallery.html',
            controller: 'testController'
        })                             
        .when('/home', {
            templateUrl: 'gallery.html',
            controller: 'testController'
        })                             

        .when('/allItems', {
            myText: 'THIS ROUTE DATA WORKS!!!!',
            templateUrl: 'allitems.html',
            controller: 'SimpleController'
        })
        .when('/viewStakeholders', {
            templateUrl: 'Partials/stakeholders.html',
            controller: 'SimpleController'
        })
        .when('/view2', {
            templateUrl: 'pages/students.html',
            controller: 'SimpleController'
        })                            
        .when('/studentName/:studentIndex', {
            templateUrl: 'pages/student.html',
            controller: 'studentController'
        })                           
        .when('/studentIndex/:studentIndex', {
            templateUrl: 'specificstudent.html',
            controller: 'studentController'
        })                            
        .when('/gallery', {
            templateUrl: 'gallery.html',
            controller: 'testController'
        })
        .otherwise({
            redirectTo: '/'
        })
    $locationProvider.html5Mode(true);
//    $locationProvider.html5Mode(
//        {
////            enabled: true,
//            requireBase: false
//        });
//    

}]);




