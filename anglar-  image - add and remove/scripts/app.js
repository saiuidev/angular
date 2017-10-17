var app = angular.module("MyApp", ['ngImgCrop']);
app.controller("MyCtrl", function($scope){
	// alert("working main ctrl")
	$scope.detailes = [
		{
			"firstname" : "Rohit",
			"lastname" : "sharma",
			"email": "roitsharma@gmail.com",
			"file" : "https://www.w3schools.com/css/trolltunga.jpg"
		},
		{
			"firstname" : "sachin",
			"lastname" : "ten",
			"email": "sachin@gmail.com",
			"file" : "https://www.w3schools.com/css/trolltunga.jpg"
		},

	]
	$scope.Add = function(){
		// alert("working function")
		console.log("add data", $scope.data);
		$scope.detailes.push($scope.data);
		// $scope.data = null;

	}
	$scope.RemoveData = function(obj){
		console.log("index value", obj);
		$scope.detailes.splice(obj, 1)
	}
	// $scope.detailescrick = $scope.detailes;
	// ng image crop codce
	 $scope.myImage='';
    $scope.myCroppedImage='';

    var handleFileSelect=function(evt) {
      var file=evt.currentTarget.files[0];
      var reader = new FileReader();
      reader.onload = function (evt) {
        $scope.$apply(function($scope){
          $scope.myImage=evt.target.result;
          // console.log("data", evt.target.result);
          $scope.data = {'file': ''}
          $scope.data.file = evt.target.result;
          console.log("image json", $scope.data.file)
        });
      };
      reader.readAsDataURL(file);
    };
    angular.element(document.querySelector('#fileInput')).on('change',handleFileSelect);

	// end crop code
});
