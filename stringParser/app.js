// app.js
spreadsheetKey = "169OCE8Hirtn8Qvx2vGaQi3_qWCFnxbWMmMT8Sh_osmQ";
url = "https://spreadsheets.google.com/feeds/list/" + spreadsheetKey + "/olaesha/public/values?alt=json";


$("#getJSON").click(function(){
	console.log('getJSON clicked');
	$.getJSON(url, function(data) {
			console.log(data)
			var entry = data.feed.entry;
			$(entry).each(function(){
				var name = this.gsx$聯絡人.$t;
				var lists = this.gsx$商品清單.$t;
				$("#rawData").append("<tr><td>" + name + "</td><td>" + lists + "</td></tr>");
			});
		});
})
