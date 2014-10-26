var resumeApp = angular.module('resumeApp',[]);

resumeApp.controller('MainResumeCtrl', function($scope, $http){
    $http.get('resume.json').success(function(data){
            $scope.resume = data;
    });
})
