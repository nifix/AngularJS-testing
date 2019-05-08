
import { HomeController } from './Home/HomeController.js';
import 'angular';
import 'bootstrap';
import './scss/app.scss';

// Define App
const espaceAce = angular.module('espaceAce', []);

// Controllers
espaceAce.controller('HomeCtrl', ['$scope', HomeController]);

// Services

// Directives