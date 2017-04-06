$(document).foundation();




        (function () {

            // Below we create  module named 'store'
            var app = angular.module("store", ['ngRoute']);




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
                                templateUrl: 'pages/teachers.html',
                                controller: 'SimpleController'
                            })                            
                            .when('/gallery', {
                                templateUrl: 'gallery.html',
                                controller: 'testController'
                            })
                            .otherwise({
                                redirectTo: '/'
                            });

                    }]);



        })();
