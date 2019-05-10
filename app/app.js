// Angular
import angular from 'angular';
import 'angular-route';

// Bootstrap
import 'bootstrap';
import './src/assets/app.scss';

// Routes Config
import './app.routes.js';

// Controllers
import './src/sections/home/home.ctrl.js';


'use strict';
const app = angular.module('app', 
[
    'ngRoute',
    'app.core',
    'app.routes'
]);
