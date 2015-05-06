// app.js
spreadsheetKey = "169OCE8Hirtn8Qvx2vGaQi3_qWCFnxbWMmMT8Sh_osmQ";
url = "https://spreadsheets.google.com/feeds/list/" + spreadsheetKey + "/olaesha/public/values?alt=json";


$("#getJSON").click(function(){
	console.log('getJSON clicked');
	$.getJSON(url, function(data) {

			var entry = data.feed.entry;
			//$("#raw").html(entry);
			entries = [];
			$(entry).each(function(){
				var name = this.gsx$聯絡人.$t;
				var phone = this.gsx$聯絡電話.$t;
				var email = this.gsx$電子郵件.$t;
				var type = this.gsx$類型.$t;
				var lists = this.gsx$商品清單.$t;
				

				
				orderData = StringSpliting(lists);
				entries.push({
					"name" : name,
					"contact":{
						"phone": phone,
						"email": email
					},
					"type": type,
					"order": orderData,
					"status": null
				});
				//$("#rawData").append("<tr><td>" + name + "</td><td>" + lists + "</td><td>" + JSON.stringify(entry) + "</td></tr>");
			});

			$("#raw").html(JSON.stringify(entries));
			$.ajax({
	           type: "POST",
	           url: "/api/save",
	           contentType: "application/json",
	           success: function (msg) {
	           },
	           data: JSON.stringify(entries)
	       });
		});
})


