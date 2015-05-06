
dictionary = [{
	"id": 1,
	"string": "「I love 球雀」紀念T - 白",
	"type_name": "球雀T-白",
	"size": true
},{
	"id": 2,
	"string": "「I love 球雀」紀念T - 灰",
	"type_name": "球雀T-灰",
	"size": true
},{
	"id": 3,
	"string": "「I  love 松鼠」紀念T - 白",
	"type_name": "松鼠T-白",
	"size": true
},{
	"id": 4,
	"string": "「I  love 松鼠」紀念T - 灰",
	"type_name": "球雀T-灰",
	"size": true
},{
	"id": 5,
	"string": "「總圖意象」紀念T - ",
	"type_name": "總圖T",
	"size": true
},{
	"id": 6,
	"string": "「懶洋洋球雀」束口袋 ",
	"type_name": "束口袋",
	"size": false
},
	]

 
orderData = [{
		"type_id": 0,
		"type_name": "球雀T-白", 
		"size":[{
			"size_id": "XS",
			"num": 0
		},{
			"size_id": "S",
			"num": 0
		},{
			"size_id": "M",
			"num": 0
		},{
			"size_id": "L",
			"num": 0
		},{
			"size_id": "2L",
			"num": 0
		}]
	},{
		"type_id": 1,
		"type_name": "球雀T-灰", 
		"size":[{
			"size_id": "XS",
			"num": 0
		},{
			"size_id": "S",
			"num": 0
		},{
			"size_id": "M",
			"num": 0
		},{
			"size_id": "L",
			"num": 0
		},{
			"size_id": "2L",
			"num": 0
		}]
	},{
		"type_id": 2,
		"type_name": "松鼠T-白", 
		"size":[{
			"size_id": "XS",
			"num": 0
		},{
			"size_id": "S",
			"num": 0
		},{
			"size_id": "M",
			"num": 0
		},{
			"size_id": "L",
			"num": 0
		},{
			"size_id": "2L",
			"num": 0
		}]
	},{
		"type_id": 3,
		"type_name": "松鼠T-灰", 
		"size":[{
			"size_id": "XS",
			"num": 0
		},{
			"size_id": "S",
			"num": 0
		},{
			"size_id": "M",
			"num": 0
		},{
			"size_id": "L",
			"num": 0
		},{
			"size_id": "2L",
			"num": 0
		}]
	},{
		"type_id": 4,
		"type_name": "總圖T", 
		"size":[{
			"size_id": "XS",
			"num": 0
		},{
			"size_id": "S",
			"num": 0
		},{
			"size_id": "M",
			"num": 0
		},{
			"size_id": "L",
			"num": 0
		},{
			"size_id": "2L",
			"num": 0
		}]
	},{
		"type_id": 5,
		"type_name": "束口袋", 
		"num": 0
	}];



function StringSpliting(string) {
	var splitStr = string.split(", ");
	var orderData = [];


	for(var i=0; i<splitStr.length; i++) {
		// each split string
		compare = dictionary.length - 1;
		var type_id, size_id;
		while(compare >= 0) {
			
			// check which string it is 
			//console.log("string: "+ splitStr[i] + ";" + dictionary[compare].string);
			//console.log("index: "+ splitStr[i].indexOf(dictionary[compare].string));
			if((search = splitStr[i].indexOf(dictionary[compare].string) != -1)) {
				
				type_id = compare;
				if(dictionary[compare].size == true ) { // has size property
					
					sub_begin = dictionary[compare].string.length
					sub_length = splitStr[i].indexOf(" * ") - dictionary[compare].string.length
					size_id = splitStr[i].substr(sub_begin, sub_length);
				}else { 
					// hasn't size property
				}
				num = splitStr[i].substr(splitStr[i].indexOf(" * ")+3, splitStr[i].length - splitStr[i].indexOf(" * ")+3);
				//console.log("type, size, num: "+ orderData[type_id].type_name +","+ size_id + "," + num);
				

				orderData.push({"type_id": type_id, "size_id": size_id, "num": num });

			}
			compare--;
		}

	}
	//console.log("----");
	return orderData;
}


Array.prototype.mySearch = function(string) {
	for(var i=0; i<this.length; i++){
		if(this[i].id == string)
			return i;
	}
	return -1
}

String.prototype.mySplit = function(option) {
	var part = [];
	var numOfPart = 0;

	var str = this;
	var begin = 0;
	var end = this.length;
	var option_begin = 0;
	var option_last = 0;
	while( (option_begin = str.indexOf(option)) >= 0 ){
		//console.log('option begin: '+option_begin);
		option_last = option_begin + option.length;
		//console.log('option begin-begin: '+(option_begin-begin));
		part[numOfPart] = str.substr(begin, option_begin-begin)
		
		// pass to next loop
		str = str.substr(option_last, end - option_last);
		numOfPart++;
	}

	part[numOfPart] = str;
	console.log(part);

}
