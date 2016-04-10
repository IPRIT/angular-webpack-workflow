import './style/main.scss';

import angular from 'angular';
import angular_material from 'angular-material';
import uirouter from 'angular-ui-router';

import AppConfig from './app.config';
import App from './components/app';

angular.module('app', [ uirouter, angular_material, App ])
    .config(AppConfig);