/**
  * @this espaceAce
  * @ngdoc HomeCtrl
  * @name espaceAce.HomeCtrl()
  *
  * @description
  * Test, héhé.
*/

export function HomeController($scope) {

  /** Mini func to test AngularJS 1.7.8
    * Tout le monde sait très bien que je n'ai pas besoin de watch
    * cette variable pour faire ce que je fais, qu'il suffirait que je
    * ng-bind, mais pour test correctement qu'Angular marchait
    * correctement, j'ai fait un truc inutile.
  */
  
  $scope.$watch('testy', function() {
    $scope.test = $scope.testy
  })
}