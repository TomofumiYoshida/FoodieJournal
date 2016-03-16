'use strict';

/**
 * @ngdoc function
 * @name group1CapstoneApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the group1CapstoneApp
 */
angular.module('group1CapstoneApp')
  .controller('DiscoverController', DiscoverController);

function DiscoverController($scope) {
  $scope.rebels = [
    {name: 'Luke Skywalker', profession: 'Jedi', weapon: 'lightsaber' },
    {name: 'Ben Kenobi', profession: 'Jedi', weapon: 'lightsaber' },
    {name: 'Han Solo', profession: 'smuggler', weapon: 'laser blaster' },
    {name: 'Chewbacca', profession: 'pilot', weapon: 'bowcaster' }
  ];
}
