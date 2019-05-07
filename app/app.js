
import { HomeController } from './Home/HomeController.js';
import 'angular';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// Define App
let espaceAce = angular.module('espaceAce', []);

// Controllers
espaceAce.controller('HomeCtrl', ['$scope', HomeController]);

// Services

// Directives