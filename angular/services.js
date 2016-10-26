/* Services */
app.service('myService', ['$q', '$http', function ($q, $http) {
    //GET NAVIGATION
    this.getNavigation = function () {
        var deferred = $q.defer();
        $http({
            method: "GET"
            , url: '/json/nav.json'
        }).success(function (result) {
            deferred.resolve(result);
        }).error(function (result) {
            deferred.reject(result);
        });
        return deferred.promise;
    };
    //GET BACKGROUNDS
    this.getBackgrounds = function () {
        var deferred = $q.defer();
        $http({
            method: "GET"
            , url: '/json/bg.json'
        }).success(function (result) {
            deferred.resolve(result);
        }).error(function (result) {
            deferred.reject(result);
        });
        return deferred.promise;
    };
}]);