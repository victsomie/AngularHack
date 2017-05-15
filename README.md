# Learning AngularJS basics

Getting some touch on angular Js is really awesome

When getting started ALWAYS include the angular.js resource

### Things to learn:

-Directives, Filters Data Binding and Filters.

** Directive **

A DIRECTIVE is really a way to teach HTML new tricks

Any time you see ng- that is an Angular directive

NB: 
 Include the ng-app

 Include the ng-model

 Bind to that model.


- Learn CONTROLLERS and how to use them


# Modules, Routes and Factories

- Learn Modules and wrap things inside it

Initializing module: 

var demoApp = angular.module("demoApp", []);

Then go back to your view (here I refer to the HTML page) and put ng-app="demoApp"

NB: Once you’ve referenced the Angular script you’re going to have access to an angular object.

The empty array passed as parameter when creating the module is used for DEPENDENCY INJECTION. Also its because your module might actually rely on other modules to get data.

e.g 
var demoApp = angular.module("demoApp", []);
var demoApp = angular.module("demoApp", ['helperModule']);

-To add CONTROLLER TO THE MODULE
    demoApp.controller("NAMEofCONTROLLER", [function(){ 
            $this.YOURVARIABLENAMEHERE = [ ANY DATA YOU WANT TO USE FALLS HERE ]
    }])

-NB: NEXT STEP
Make sure that my *ng-app* points up to *demoApp* in the strings. I could even then in the view do *ng-controller*

#### Three different ways to create controllers inside app

1. One way you can create an external function and just pass the function in with the controller name.

2. The second way is you could actually pass a name as a string with an anonymous function.
The third way is we can come in and create controller variables and initialize them all together


## ROUTING

This is so much useful when we want to load new views into our shell page.

Two way for routing:
1. Embedding the view as a script template inside the shell page. Then referencing it via its 'id'

2. Having the Views on the server then tell Angular "the template URL fir what I want to load" and then you give it the URL to the server

* ng-view * now represents the placeholder where the views wshall be injected



# Official and Awesome References
1. [Full Official Documentation](https://docs.angularjs.org/guide)
2. [Routing (ngroute, $route, $routeProvider, $routeParams)](http://www.guru99.com/angularjs-routes.html)




