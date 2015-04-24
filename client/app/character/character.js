'use strict';

angular.module('dndCharacterSheetApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('character', {
        url: '/character',
        templateUrl: 'app/character/character.html',
        controller: 'CharacterCtrl'
      });
  });