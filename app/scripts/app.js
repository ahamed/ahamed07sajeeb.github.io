'use strict';

/**
 * @ngdoc overview
 * @name angularExampleApp
 * @description
 * # angularExampleApp
 *
 * Main module of the application.
 */
 
angular
  .module('ipAssignment', ['ui.router','ngSanitize'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('app',{
        url : '/',
        views:{
          'content':{
            templateUrl : "views/cover.html",
            controller: 'CoverController'
          }

        }
        })
      .state('app.answers',{
        url: 'questions-answers',
        views:{
          'content@':{
            templateUrl : "views/qa.html",
            controller : "AnswerController"
          }
        }
      });

      $urlRouterProvider.otherwise("/");
  });
