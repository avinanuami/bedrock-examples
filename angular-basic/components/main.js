/*!
 * Copyright (c) 2015-2017 Digital Bazaar, Inc. All rights reserved.
 */
import angular from 'angular';
import HomeComponent from './home-component';
import ShowNumbersComponent from './show-numbers-component';

'use strict';

const module = angular.module('angular-basic', []);
module.component('exHome', HomeComponent);
module.component('exShowNumbers', ShowNumbersComponent);

/* @ngInject */
module.config($routeProvider => {
  $routeProvider
    .when('/', {
      title: 'Angular Basic Home',
      template: '<ex-home></ex-home>'
    });
});
