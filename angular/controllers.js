'use strict';
/* Controllers */
app.controller('Controller', function ($scope, $http) {
    $scope.navItems = [{
        'id': ''
        , 'title': ''
        , 'img': ''
    }];
    //GET NAV-ITEMS FROM JSON FILE
    $http({
        method: 'GET'
        , url: '/json/nav.json'
    }).then(function successCallback(response) {
        $scope.navItems = response.data.navItems;
        console.log(response);
        $scope.$broadcast('dataloaded');
    }, function errorCallback(response) {
        $log(response);
    });
});