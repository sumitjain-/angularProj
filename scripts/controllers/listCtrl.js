todoapp.controller('mainCtrl', function ($scope, localStorageService) {
	
	if (!localStorageService.get("item1")){
		localStorageService.set("item1", ["abc"]);
		console.log(localStorageService.get("item1"));
	}

	$scope.list = localStorageService.get("item1");

	$scope.addItem = function () {
		if($scope.new_item == "" || $scope.new_item == null){
			alert("Empty Item!");
			return;
		}
		$scope.list.push($scope.new_item);
		localStorageService.set("item1", $scope.list);
		$scope.list = localStorageService.get("item1");
		console.log(localStorageService.get("item1"));
	}

	$scope.removeItem = function (index) {
		$scope.list.splice(index, 1);
		localStorageService.set("item1", $scope.list);
		console.log(localStorageService.get("item1"));
	}

	$scope.log = function (inp) {
		console.log(inp);
	}
})