angular.module('myApp', []).
  controller('myController', ['$scope', '$http', function($scope, $http) {

    $http.get('/user/profile')
        .success(function(data, status, headers, config) {
      $scope.user = data;
      $scope.error = "";
    }).
    error(function(data, status, headers, config) {
      $scope.user = {};
      $scope.error = data;
    });

    $scope.waterMes = function() {
      console.log("in waterMes");
      if($scope.user.cup === '0-1'){
       $scope.message = "Good start! Keep going!";
      }
      else if ($scope.user.cup === '2-3'){
	$scope.message = "Not bad!"
       }
      else if ($scope.user.cup === '4-5'){
        $scope.message = "Getting close!"
      }
      else if ($scope.user.cup === '6-7'){
        $scope.message = "Almost there!"
      }
      else if ($scope.user.cup === '8+'){
        $scope.message = "CONGRADULATIONS! Good job on drinking enough water for today!";
      }
    };



    /*$scope.addItem = function() {
      if($scope.formContent === ''){return;}
      console.log("In addItem with " +$scope.formContent);
      $scope.create({
	item: $scope.formContent
      });
      $scope.formContent='';
    };

    $scope.create = function(item){
      return $http.post('/items', item).success(function(data){
	$scope.list.push(data;
      });
    }*/

  }]);

