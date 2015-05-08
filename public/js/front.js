angular.module('front', ['keyValue'])

.filter('hideSome', function() {
	return function(row, status){
		var output = [];
		if(status == true) {
			for(var i in row){
				if(row[i].status==null)
					output.push(row[i]);
			}
		}else {
			output = row;
		}
		return output;
	};
})

.controller('tableView', ["$scope", "$http",  "keyValue", function($scope, $http, keyValue) {
	$scope.rows;
	$scope.key = keyValue;
	$scope.changeStatus = function(row) {
		var dataSent;		
		if(row.status == null){
			row.status = 1; // is picking
		}else{
			row.status = null;
		}

		dataSent = row;

		$http.put('/api/order/withcounter/'+row._id, dataSent)
				.success(function(data, status) {
				})
				.error(function(data, status) {
					console.log('http put error');
				});
	};

	$http.get('/api/order/all')
		.success(function(data, status) {
			//console.log(data);
			$scope.rows = data;
		})
		.error(function(data, status) {
			console.log("error: "+ status);
		});


}])