/*!
 * Example component module.
 *
 * Copyright (c) 2014-2017 Digital Bazaar, Inc. All rights reserved.
 *
 */
import angular from 'angular';
import * as bedrock from 'bedrock-angular';
import PeopleComponent from './people-component.js';
import PersonEditorComponent from './person-editor-component.js';
import TraitAdderComponent from './trait-adder-component.js';
import FocusDirective from './focus-directive.js';
import PeopleService from './people-service.js';

const module = angular.module('app.mongodb.advanced', [
  'bedrock.alert', 'bedrock.modal', 'ngMaterial']);

bedrock.setRootModule(module);

module.component('brPeople', PeopleComponent);
module.component('brPersonEditor', PersonEditorComponent);
module.component('brTraitAdder', TraitAdderComponent);
module.directive('exFocus', FocusDirective);
module.factory('exPeopleService', PeopleService);

/* @ngInject */
module.config($routeProvider => {
  $routeProvider.when('/', {
    title: 'MongoDB-Advanced Example',
    template: '<br-people></br-people>'
  });
});
