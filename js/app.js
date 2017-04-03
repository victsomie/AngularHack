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
            controllers.testController = function ($scope){
                    
                $scope.members = [
                    {firstName : 'Peter',secondName : 'Habert',location :'Turkey'},
                    {firstName : 'James',secondName : 'Odongo',location :'Mombasa'}
                ];
                $scope.images = [
                    {name: 'Esther Raw', photo : 'img/eswithfriend.jpg'},
                    {name: 'Esther Raw', photo : 'img/eswithfriend2.jpg'},                        {name: 'Esther Raw', photo : 'img/eswithfriend.jpg'},
                    {name: 'Esther Raw', photo : 'img/eswithfriend2.jpg'}
                ];
                $scope.testimonials = [
                    {who: "James Edmond", from: "Cairo", content: "We have loved your work"},
                    {who: "Lonny Pascal", from: "Johannesberg", content: "Some real good stuff there. "},
                ];                
                
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
