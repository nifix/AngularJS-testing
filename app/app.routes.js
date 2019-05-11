/*
 * Module : Routes Config
 * Purpose : Handle Routes (Yep really)
 * 
 * Author : Cédric F.
 */

(function(){
    'use strict';

    angular
        .module('app.routes', ['ngRoute'])
        .config(config);

    /** @ngInject */
    function config($routeProvider){
        var vm = this;
        
        init();

        function init(){
            $routeProvider
            .when('/', {
                templateUrl: 'app/src/sections/home/home.tpl.html',
                controller: 'HomeCtrl'
            })
            .when('/customers-list', {
                templateUrl: 'app/src/sections/customers/customers.tpl.html',
                controller: 'CustomersCtrl'
            })           
        }

    }

}());