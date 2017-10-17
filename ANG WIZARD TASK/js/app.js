var APP = angular.module("myapp",['mgo-angular-wizard']);
APP.controller("myctrl",function($scope){
		

		$scope.LastStep = function(){
			alert("details saved successfully");
			$scope.data = "null";
								}


});