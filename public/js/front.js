angular.module('front', [])


.service('keyValue', function(){
	type = {
		"0": "球雀T-白",
		"1": "球雀T-灰",
		"2": "松鼠T-白",
		"3": "松鼠T-灰",
		"4": "總圖T",
		"5": "束口袋"
	};
	
	note = {
		"blink": "",
		"unpaid": "尚未付款",
		"award": "FB獲獎人"
	};

	this.getType = type;

	this.getNote = note;
})

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
			dataSent = {"status": 1}
		}else{
			row.status = null;
			dataSent = {"status": null}
		}

		$http.put('/api/order/'+row._id, dataSent)
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