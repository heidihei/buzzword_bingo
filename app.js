var app = angular.module('BuzzwordBingo', []);

// app.config(function($routeProvider) {
//     $routeProvider
//     .when('/', {
//         controller: 'MainController',
//         templateUrl: 'index.html'
//     });
// });

// app.factory('buzzwords', function(){
//     var buzzwords = {};

//     buzzwords.list = [];

//     buzzwords.add = function(buzzword) {
//         buzzwords.list.push({id: buzzwords.list.length, text: buzzword});
//     };

//     return buzzwords;
// });

app.controller('MainController', function(){

    var self = this;

    self.buzzword = "Hello";
    
    self.changeBuzzword = function(buzzword){
        self.buzzword = buzzword;
    };
});

// app.factory('buzzwords', function(){
//     var buzzwords = {};

//     return buzzwords;
// })