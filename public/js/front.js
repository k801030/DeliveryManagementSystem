angular.module('front', [])

.controller('tableView', ["$scope", "$http", function($scope, $http) {
	var data = $http.get('/api/order/all')
		.success(function(data, status) {
			console.log(data);
		})
		.error(function(data, status) {
			console.log("error: "+ status);
		})
}])