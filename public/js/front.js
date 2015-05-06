angular.module('front', [])

.controller('tableView', ["$scope", "$http", function($scope, $http) {
	$scope.rows;

	$http.get('/api/order/all')
		.success(function(data, status) {
			console.log(data);
			$scope.rows = data;
		})
		.error(function(data, status) {
			console.log("error: "+ status);
		});

}])