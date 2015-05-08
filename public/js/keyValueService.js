angular.module('keyValue', [])

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