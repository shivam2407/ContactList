var myApp = angular.module('myApp',[]);
myApp.controller('AppCtrl',['$scope','$http',function($scope,$http){
  console.log("Hello World from Controller");

var refresh = function(){
  $http.get('/contactlist').then(function(response){
    console.log("I got the data");
    $scope.contactlist = response.data;
    $scope.contact = {};
  });
}

refresh();


  $scope.remove = function(id){
    console.log(id);
    $http.delete("/contactlist/"+id).then(function(response){
      refresh();
    });
  };
  $scope.edit=function(id){
    console.log(id);
    $http.get("/contactlist/"+id).then(function(response){
      $scope.contact = response.data;
    });
  };

  $scope.update=function(){
    console.log();
    $http.put('/contactlist/' + $scope.contact._id, $scope.contact).then(function(response){
      console.log(response.data);
      $scope.contactlist = response.data;
      refresh();
    });
  };
  $scope.deselect=function(){
    $scope.contact={};
  };
  $scope.addContact = function(){
    console.log($scope.contact);
    $http.post('/contactlist',$scope.contact).then(function(response){
      console.log(response.data);
      refresh();
    });
  };

}]);
