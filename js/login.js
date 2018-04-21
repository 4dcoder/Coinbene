var app= angular.module('app', []);

app.controller('log',function($scope){
    console.log("controller initialized");

    var coinbeneStorage = new CoinbeneStorage((storage) => {

        if ((storage["username"] != undefined && storage["username_key"] == md5(storage["username"])) 
            && (storage["password"] != undefined && storage["username_key"] == md5(storage["username"]))) {
            window.location.href = "index.html";
        }

    });

    $scope.login_sub = function(){

        if (($scope.username != undefined && coinbeneStorage.storage["username_key"] == md5($scope.username)) 
            && ($scope.password != undefined && coinbeneStorage.storage["password_key"] == md5($scope.password))) {

            coinbeneStorage.add("username", $scope.username);
            coinbeneStorage.add("password", $scope.password);
            coinbeneStorage.sync(function(){
                window.location.href = "index.html";
            });
        }

    };
});

$(function(){
});

