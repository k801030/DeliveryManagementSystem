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
.controller('tableView', ["$scope", "$http",  "keyValue", function($scope, $http, keyValue) {
	$scope.rows;
	$scope.key = keyValue;

	$scope.changeStatus = function(row) {
		if(row.status == null){
			row.status = "已領貨";
			$("#status").show("fast");
			//$("#status").show("fast");
		}else{
			row.status = null;
		}
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