angular.module('front', [])

controller('tableView', ["$scope", "$http", function($scope, $http) {
	var data = $http.get('data/orders.js')
}])