/*
 * Imports 
*/

import 'angular';
import 'angular-route';
import 'bootstrap';
import './app.scss';

import { HomeCtrl } from './controllers/home/HomeCtrl.js';


/*
 * App definition 
*/

const espaceAce = angular.module('espaceAce', [
    require('angular-route')
]);

/*
 * Controllers 
*/

espaceAce.controller('HomeCtrl', ['$scope', HomeCtrl]);

/*
 * Routing settings 
*/

espaceAce.config([
    "$routeProvider",
    function($routeProvider) {
        $routeProvider
        .when('/', {
            templateUrl: 'app/partials/homePartial.htm',
            controller: 'HomeCtrl'
        })
    }
]);


// Services

// Directives