'use strict';

angular.module('myApp.contacts', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/contacts', {
    templateUrl: 'contacts/contacts.html',
    controller: 'contactsCtrl'
  });
}])

.controller('contactsCtrl', ['$scope','$firebaseArray', function($scope, $firebaseArray) {
    //console.log('contacts controller loaded..');
    var ref = new firebase('https://console.firebase.google.com/u/0/project/angularjsfirebasemessageapp')

    $scope.contacts = $firebaseArray(ref);

    $scope.addContact = function(){
      console.log("adding contact");
    }
}]);