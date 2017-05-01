$(document).foundation();






// Below we create  module named 'store'
var app = angular.module("store", ['ngRoute']);




// To the module 'store' we add a controller named 'SimpleController'
app.controller('SimpleController', function($scope){
    $scope.students = [
        {name: 'Maureen Keruboxx', course: 'BBIT',
         unitsTaken: ["Intro. to comp", "Organizationl behavior"]
        },
        {name: 'Kim Jone Siwa', course: 'Comp Sc.'},
        {name: 'Jane Kamande', course: 'Comp Engineering'},
        {name: 'Dennis Ettary', course: 'Graphics Design'},
        {name: 'Evans Ngure', course: 'Maths for Science'}
    ];

    $scope.studentsNumber = $scope.students.length;

});            
// To the module 'store' we add a controller named 'SimpleController'
app.controller('studentController', function($scope, simpleFactory, $routeParams){

    $scope.students = simpleFactory.getStudents();
    //                $scope.studentsSize = $scope.students[$scope.studentName];

    // Specific student using the selected id
    var studentIndexInTheArray = $routeParams.studentIndex;
    $scope.specificStudent = $scope.students[studentIndexInTheArray];

    var indexByNameClick =$routeParams.studentName;
    $scope.specificStudentTest = $scope.students[indexByNameClick];


});




// Adding multiple controllers
var controllers = {};
controllers.xSimpleController = function($scope){
$scope.students = [
    {name: 'Maureen Kerubo', course: 'BBIT'},
    {name: 'Kim Jone Siwa', course: 'Comp Sc.'},
    {name: 'Jane Kamande', course: 'Comp Engineering'},
    {name: 'Dennis Ettary', course: 'Graphics Design'},
    {name: 'Evans Ngure', course: 'Maths for Science'}
    ];

}



// Creating a factory
app.factory('simpleFactory', function(){
// NB: You could do your calls for external data here now
var testimonials = [
    {who: "James Edmond", from: "Cairo", content: "We have loved your work"},
    {who: "Lonny Pascal", from: "Johannesberg", content: "Some real good stuff there. "},
]; 

// Create an empty factory object
var factory = {};

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
    {name: 'Kim Jone Siwa', course: 'Comp Sc.'},
    {name: 'Jane Kamande', course: 'Comp Engineering'},
    {name: 'Dennis Ettary', course: 'Graphics Design'},
    {name: 'Evans Ngure', course: 'Maths for Science'}

];

// Moved the students list to a factory
factory.getStudents = function(){            
    return students;
}

// MUST HAVE THIS RETURN
return factory;

});

// Note that simpleFactory (a factory is put in here)
controllers.testController = function ($scope, simpleFactory, $http){

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

$scope.members = [
{firstName : 'Peter',secondName : 'Habert',location :'Turkey'},
{firstName : 'James',secondName : 'Odongo',location :'Mombasa'}
];
$scope.images = [
{name: 'Esther Raw', photo : 'img/eswithfriend.jpg'},
{name: 'Esther Edited', photo : 'img/eswithfriend2.jpg'},                        {name: 'Esther Raw', photo : 'img/eswithfriend.jpg'},
{name: 'Esther Raw', photo : 'img/eswithfriend2.jpg'}
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

app.config(['$routeProvider',
function($routeProvider) {
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
        });

}]);




