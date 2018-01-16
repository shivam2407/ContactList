var myApp = angular.module('myApp',[]);
myApp.controller('AppCtrl',['$scope','$http',function($scope,$http){
  console.log("Hello World from Controller");

  $http.get('/contactlist').then(function(response){
    console.log("I got the data");
    $scope.contactlist = response.data;
  });


}]);
