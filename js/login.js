var app= angular.module('app', []);

app.controller('log',function($scope){
    console.log("controller initialized");

    var coinbeneStorage = new CoinbeneStorage();

    $scope.login_sub = function(){

        if (($scope.username != undefined && coinbeneStorage.storage["username"] == md5($scope.username)) 
            && ($scope.password != undefined && coinbeneStorage.storage["password"] == md5($scope.password))) {
            window.location.href = "index.html";
        }

    };
});

$(function(){
});

