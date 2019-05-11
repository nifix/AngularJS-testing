/*
 * Module : Customers Controller
 * Purpose : Handle customers
 * 
 * Author : Cédric F.
 */

(function(){
    'use strict';

    angular
        .module('customers.list', [])
        .controller('CustomersListCtrl',['$scope','$resource', CustomersListCtrl]);

    /** @ngInject */
    function CustomersListCtrl($scope, $resource){
        var vm = this;
        
        init();

        function init() {

            let ajax = $resource('api/api_get_customers.php');
            ajax.query().$promise.then(function(data){
                $scope.customers = data;
            });
        }

    }

}());