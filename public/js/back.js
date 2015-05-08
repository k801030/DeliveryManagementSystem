angular.module('back', ['keyValue'])

.controller('tableView', ["$scope", "$http", function($scope, $http) {
	$scope.orders = [];

	var socket = io('http://140.112.107.72:1234/');
	socket.on('order', function(data){
		//$scope.orders = data;
		$http.get('/api/order/status/1')
			.success(function(data, status) {
				//console.log(data);
				$scope.orders = data;
			})
			.error(function(data, status) {
				console.log("error: "+ status);
			});
	});
}])