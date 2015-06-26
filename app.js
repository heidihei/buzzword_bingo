var app = angular.module('BuzzwordBingo', []);

app.factory('buzzwords', function(){
    var buzzwords = {};

    buzzwords.list = [];

    buzzwords.add = function(buzzword) {
        buzzwords.list.push({id: buzzwords.list.length, text: buzzword});
    }

    return buzzwords;
});

app.controller('ListCtrl', function(buzzwords){
    var self = this;

    self.buzzwords = buzzwords.list;
});

app.controller('PostCtrl', function(buzzwords){
    var self = this;

    self.addBuzzword = function(buzzword) {
        buzzwords.add(buzzword);
        self.newBuzzword = '';
    }
});








