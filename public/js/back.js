angular.module('back', ['keyValue'])

.controller('tableView', ["$scope", "$http", 'keyValue', function($scope, $http, keyValue) {
	$scope.orders = [];
	$scope.key = keyValue;
	$scope.changeStatusTo = function(row, num) {
		var dataSent;		
		row.status = num;
		dataSent = row;
		$http.put('/api/order/'+row._id, dataSent)
				.success(function(data, status) {
				})
				.error(function(data, status) {
					console.log('http put error');
				});
	};

	var socket = io('http://140.112.107.72:1234/');
	socket.on('order', function(data){
		//$scope.orders = data;
		load();
	});

	load();

	function load() {
		$http.get('/api/order/status/1')
			.success(function(data, status) {
				//console.log(data);
				$scope.orders = data;
			})
			.error(function(data, status) {
				console.log("error: "+ status);
			});
	}
}])

