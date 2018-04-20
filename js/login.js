var app= angular.module('app', []);

app.controller('log',function($scope){
    console.log("controller initialized");

    var coinbeneStorage = new CoinbeneStorage();

    $scope.login_sub = function(){
        console.log(coinbeneStorage.storage["username"]);
        console.log(coinbeneStorage.storage["password"]);

        console.log("inside function");
        // window.location.href = "index.html";
    };
});

$(function(){
});

