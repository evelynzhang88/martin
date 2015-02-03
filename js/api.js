$(function(){
	var StopLoading = false;
	var GetMoreLesson =  function(cid){
		if(StopLoading) return;
		StopLoading=true;
		$(".loading").show();
		$.ajax({
			'url' : "http://b2cglobaluat.englishtown.com/community/dailylesson/lesson/previous/"+cid+"/zh-cn/10",
	        'type' : 'GET',
	        'dataType' : 'json'
		}).done(function(data){
			if(data.status==0){
				// append the data
				setTimeout(function(){
					$(".loading").hide();
					StopLoading=false;
				},500)
			}
		})
	}

	//loading when the scrolltop is to bottom
	window.GetProvinceList = function(){
		$(".provinces").html("");
		for(var i=0;i<provinceList.data.length;i++){
			$(".provinces").append("<li>"+provinceList.data[i]+"</li>");
		}
	}

	window.SelectProvince = function(province){
		GetCityList(province);
		GetZoneList(province);
		GetShopList(province,"","");
		$(".block-province .tt").html(province);
  		$(".provinces").hide();
	}

	window.GetCityList = function(province){
		$(".cities").html("");
		for(var i=0;i<moradata.data.length;i++){
			if(moradata.data[i].province==province){
				for(var j=0;j<moradata.data[i].cities.length;j++){
					$(".cities").append("<li>"+moradata.data[i].cities[j].name+"</li>");
				}
			}
		}
	}

	window.SelectCity = function(province,city){
		GetZoneList(province,city);
		GetShopList(province,city);
		$(".block-city .tt").html(city);
  		$(".cities").hide();
	}

	window.GetZoneList = function(province,city){
		$(".zones").html("");
		for(var i=0;i<moradata.data.length;i++){
			if(moradata.data[i].province==province){

				for(var j=0;j<moradata.data[i].cities.length;j++){
					if(city){
						if(moradata.data[i].cities[j].name==city){
							for(var k=0; k<moradata.data[i].cities[j].quxian.length;k++){
								$(".zones").append("<li>"+moradata.data[i].cities[j].quxian[k].name+"</li>");
							}
						}
					}else{
						for(var k=0; k<moradata.data[i].cities[j].quxian.length;k++){
							$(".zones").append("<li>"+moradata.data[i].cities[j].quxian[k].name+"</li>");
						}
					}
					
				}

				
			}
		}
	}

	window.SelectZone = function(province,city,zone){
		GetShopList(province,city,zone);
		$(".block-zone .tt").html(zone);
  		$(".zones").hide();
	}

	window.GetShopList = function(province,city,zone){
		$(".shop-collection").html("");
		for(var i=0;i<moradata.data.length;i++){
			if(moradata.data[i].province==province){
				for(var j=0;j<moradata.data[i].cities.length;j++){
					if(city){
						if(moradata.data[i].cities[j].name==city){
							for(var k=0; k<moradata.data[i].cities[j].quxian.length;k++){
								// province city zone;
								if(zone){
									if(moradata.data[i].cities[j].quxian[k].name==zone){
										for(var l=0;l<moradata.data[i].cities[j].quxian[k].shop.length;l++){
											$(".shop-collection").append("<li>"+moradata.data[i].cities[j].quxian[k].shop[l]+"</li>");
										}
									}
								}else{
									// province city
									for(var l=0;l<moradata.data[i].cities[j].quxian[k].shop.length;l++){
										$(".shop-collection").append("<li>"+moradata.data[i].cities[j].quxian[k].shop[l]+"</li>");
									}
									
								}
							}
						}

					}else{
						for(var k=0; k<moradata.data[i].cities[j].quxian.length;k++){
							// province zone;
							if(zone){
								if(moradata.data[i].cities[j].quxian[k].name==zone){
									for(var l=0;l<moradata.data[i].cities[j].quxian[k].shop.length;l++){
										$(".shop-collection").append("<li>"+moradata.data[i].cities[j].quxian[k].shop[l]+"</li>");
									}
								}
							}else{
								// province

								for(var l=0;l<moradata.data[i].cities[j].quxian[k].shop.length;l++){
									$(".shop-collection").append("<li>"+moradata.data[i].cities[j].quxian[k].shop[l]+"</li>");
								}
								
							}

							
						}

					}
					
				}
			}
		}
	}




})