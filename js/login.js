var app= angular.module('app', []);

app.controller('log',function($scope){
    console.log("controller initialized");

    $scope.login_sub = function(){
        console.log("inside function");
    };
});

