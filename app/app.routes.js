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
                templateUrl: 'app/controllers/home/home.tpl.html',
                controller: 'HomeCtrl'
            })           
        }

    }

}());