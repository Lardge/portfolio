/* Controllers */
app.controller('Controller', ['$scope', 'myService', function ($scope, myService) {
    //GET NAV-ITEMS FROM JSON FILE
    $scope.getNavigation = function () {
        myService.getNavigation().then(function (response) {
            console.log(response);
            $scope.navItems = response.navItems;
        }).catch(function () {
            console.log("Error occured in Get Navigation");
        });
    };
    //GET BG-ITEMS FROM JSON FILE
    $scope.getBackgrounds = function () {
        myService.getBackgrounds().then(function (response) {
            console.log(response);
            $scope.bgItems = response.bgItems;
        }).catch(function () {
            console.log("Error occured in Get Backgrounds");
        });
    };
    $(document).ready(function () {
        $scope.getNavigation();
        $scope.getBackgrounds();
    });
    $scope.changeBackground = function (imgUrl) {
        angular.element(document.querySelector('#home-bg')).css('background', 'url(' + imgUrl + ')')
    };
}]);