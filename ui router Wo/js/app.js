
var APP = angular.module("myapp",['ui.router']);
APP.controller("myctrl",function(){

});

APP.config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise("/main");
	$stateProvider
	.state('main', {
		url: "/main",
		templateUrl: "views/main.html"
	})

	.state('main.main1', {
		url: "/main1",
		templateUrl: "views/main1.html"
	})

	.state('features', {
		url: "/features",
		templateUrl: "views/about.html"
	})
	/*.state('prices', {
		url: "/prices",
		templateUrl: "views/prices.html"
	})
*/
	

	
	
});
