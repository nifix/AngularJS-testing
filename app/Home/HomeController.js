/**
  * @this espaceAce
  * @ngdoc HomeCtrl
  * @name espaceAce.HomeCtrl()
  *
  * @description
  * Test, héhé.
*/

export function HomeController($scope) {

  // Mini func to test AngularJS 1.7.8
  
  $scope.$watch('testy', function() {
    $scope.test = $scope.testy
  })
}