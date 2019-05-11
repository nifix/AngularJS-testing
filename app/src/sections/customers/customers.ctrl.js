/*
 * Module : Customers Controller
 * Purpose : Handle customers
 * 
 * Author : Cédric F.
 */

(function(){
    'use strict';

    angular
        .module('app.customers', [])
        .controller('CustomersCtrl', CustomersCtrl)

    /** @ngInject */
    function CustomersCtrl(){
        var vm = this;
        
        init();

        function init() {
        }

    }

}());