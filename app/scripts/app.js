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
  .directive('ngPrism', [function() {
    return {
        restrict: 'A',
        link: function($scope, element, attrs) {
            element.ready(function() {
                Prism.highlightElement(element[0]);
            });
        }
    }
  }])
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
      .state('app.mid1',{
        url: 'mid-01',
        views:{
          'content@':{
            templateUrl : "views/mid01.html",
            controller : "AnswerController"
          }
        }
      })
      .state('app.mid2',{
        url: 'mid-02',
        views:{
          'content@':{
            templateUrl : "views/mid02.html",
            controller : "AnswerController2"
          }
        }
      })
      ;

      $urlRouterProvider.otherwise("/");
  });
