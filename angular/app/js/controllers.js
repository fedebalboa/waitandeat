'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('LandingPageController', [function() {

  }])
  .controller('WaitListController' , ['$scope','$firebase', function($scope,$firebase){

    var partiesRef = new Firebase('https://waitandeat-fbalboa.firebaseio.com/');

    $scope.parties = $firebase(partiesRef);

    $scope.party = {name: '', phone: '', size: ''};

    $scope.saveParty = function() {
      $scope.parties.$add($scope.party);
      $scope.party = {name: '', phone: '', size: ''};

    };

  }]);