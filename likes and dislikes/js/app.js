var APP = angular.module("MyApp",[]);
APP.controller("MyController",function($scope){
			console.log("working");

			 $scope.technoliges = [ {name: "java", likes:0 , dislikes : 0 },
			 						{name: ".net", likes:0 , dislikes : 0 },
			 							{name: "angular", likes:0 , dislikes : 0 },
			 									{name: "ui", likes:0 , dislikes : 0 }


			 ];
			 

			 $scope.like = function(technology){
				technology.likes++;
		}
			 
});