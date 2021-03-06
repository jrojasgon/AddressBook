import angular from 'angular';
import uiRouter from '@uirouter/angularjs';

import {contactsListModule} from './contacts-list/contacts-list.component'
import {contactsAddModule} from './contacts-add/contacts-add.component'
import {contactsShowModule} from './contacts-show/contacts-show.component'

// avec export, on peut importer ailleurs le contactModule
export const contactsModule = angular.module('contacts.module', [
  contactsListModule.name,
  contactsAddModule.name,
  contactsShowModule.name,
  uiRouter
]);

// config avec le router

contactsModule.config(['$stateProvider', function ($stateProvider) {
  $stateProvider
    .state({
      name: 'contacts-list',
      url: '/contacts/list',
      component: 'contactsList'
    });

  $stateProvider
    .state({
      name: 'contacts-add',
      url: '/contacts/add',
      component: 'contactsAdd'
    });

  $stateProvider
    .state({
      name: 'contacts-show',
      url: '/contacts/:id',
      component: 'contactsShow'
    });
}]);