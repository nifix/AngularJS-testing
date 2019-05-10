/*
 * Module : Home Controller
 * Purpose : Handle Homepage
 * 
 * Author : Cédric F.
 */

(function(){
    'use strict';

    angular
        .module('app.core', [])
        .controller('HomeCtrl', ['$scope', HomeCtrl])

    /** @ngInject */
    function HomeCtrl($scope){
        var vm = this;
        
        init();

        function init(){

          $scope.$watch('testy', function() {
            $scope.test = $scope.testy
          });

        }

    }

}());
