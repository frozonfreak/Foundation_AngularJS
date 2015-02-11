var smApp = angular.module('smApp',['ui.router', 'ngCookies','mm.foundation']);

smApp.config(function($stateProvider, $urlRouterProvider) {

  // Now set up the states
  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: "partials/home.html",
      controller: 'appController',
    })
    .state('404', {
      url: "/404",
      templateUrl: "404.html",
      controller: 'app404Controller',
    })
    // For any unmatched url, redirect to /state1
     $urlRouterProvider.otherwise("/");

});

smApp.controller('appController', function($scope, $modal, $log){
  
  
  //Accordian
  $scope.oneAtATime = true;

  $scope.groups = [
    {
      title: "Dynamic Group Header - 1",
      content: "Dynamic Group Body - 1"
    },
    {
      title: "Dynamic Group Header - 2",
      content: "Dynamic Group Body - 2"
    }
  ];

  $scope.items = ['Item 1', 'Item 2', 'Item 3'];

  $scope.addItem = function() {
    var newItemNo = $scope.items.length + 1;
    $scope.items.push('Item ' + newItemNo);
  };

  //Alert
  $scope.alerts = [
    { type: 'danger', msg: 'Oh snap! Change a few things up and try submitting again.' },
    { type: 'success round', msg: 'Well done! You successfully read this important alert message.' }
  ];

  $scope.addAlert = function() {
    $scope.alerts.push({msg: "Another alert!"});
  };

  $scope.closeAlert = function(index) {
    $scope.alerts.splice(index, 1);
  };


  //Buttons
  $scope.singleModel = 1;

   $scope.radioModel = 'Middle';

   $scope.checkModel = {
     left: false,
     middle: true,
     right: false
   };

   //Drop down Toggle
   $scope.items = [
       "The first choice!",
       "And another choice for you.",
       "but wait! A third!"
     ];
     $scope.linkItems = {
       "Google": "http://google.com",
       "AltaVista": "http://altavista.com"
     };


    //Modal
    $scope.items = ['item1', 'item2', 'item3'];

      $scope.open = function () {

        var modalInstance = $modal.open({
          templateUrl: 'myModalContent.html',
          controller: 'ModalInstanceCtrl',
          resolve: {
            items: function () {
              return $scope.items;
            }
          }
        });

        modalInstance.result.then(function (selectedItem) {
          $scope.selected = selectedItem;
        }, function () {
          $log.info('Modal dismissed at: ' + new Date());
        });
      };

    //Initializer
  init();
  function init(){
    
    
  };
  
});

smApp.controller('ModalInstanceCtrl', function ($scope, $modalInstance, items) {

  $scope.items = items;
  $scope.selected = {
    item: $scope.items[0]
  };

  $scope.ok = function () {
    $modalInstance.close($scope.selected.item);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
});
smApp.controller('app404Controller', function($scope){

});