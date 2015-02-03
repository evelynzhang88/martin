$(function(){
	// DO THE ACTION
  	
  	// load the province list first
  	GetProvinceList();

  	// open the list
  	$(".block-province .label").on("touchstart", function(){
  		$(".provinces").show();
  	})
  	$(".block-city .label").on("touchstart", function(){
  		$(".cities").show();
  	})
  	$(".block-zone .label").on("touchstart", function(){
  		$(".zones").show();
  	})

  	// SELECT PROVINCE
  	$(".provinces li").on("touchstart", function(){
  		$(".provinces li").removeClass("active");
  		$(this).addClass("active");
  		var curProvince = $(this).html();
  		SelectProvince(curProvince);

  		// SELECT CITY
  		$(".cities li").on("touchstart", function(){
	  		$(".cities li").removeClass("active");
	  		$(this).addClass("active");
	  		var curCity = $(this).html();
	  		SelectCity(curProvince,curCity);

	  		// SELECT ZONE
	  		$(".zones li").on("touchstart", function(){
		  		$(".zones li").removeClass("active");
		  		$(this).addClass("active");
		  		var curCity = $(".cities li.active").html(),
		  			curZone = $(this).html();
		  		SelectZone(curProvince,curCity,curZone);
		  	})

	  	})

		// SELECT ZONE
	  	$(".zones li").on("touchstart", function(){
	  		$(".zones li").removeClass("active");
	  		$(this).addClass("active");
	  		var curCity = $(".cities li.active").html(),
	  			curZone = $(this).html();
	  		SelectZone(curProvince,curCity,curZone);
	  	})

  	})

  	


});