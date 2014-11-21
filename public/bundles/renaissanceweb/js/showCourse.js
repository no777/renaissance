$(function(){
	//判断是否是移动设备 
	var isMobile = {
    	Android: function() {
        	return navigator.userAgent.match(/Android/i) ? true : false;
    	},
    	BlackBerry: function() {
        	return navigator.userAgent.match(/BlackBerry/i) ? true : false;
    	},
    	iOS: function() {
        	return navigator.userAgent.match(/iPhone|iPad|iPod/i) ? true : false;
    	},
    	Windows: function() {
        	return navigator.userAgent.match(/IEMobile/i) ? true : false;
    	},
    	any: function() {
        	return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Windows());
    	}
    };
	iden=isMobile; //lcx-debug
	/*
    if( isMobile.any() ){
    	alert("移动设备");
    }else{
    	alert("pc");
    	showSexangleCourse(); 
    }
	*/
});

//六边形课程显示
function showSexangleCourse(){

	var speed=200; // anime speed
	
	$("#imgOne").animate({
		opacity:1
	},speed,function(){
		$("#imgTwo").animate({
			opacity:1
		},speed,function(){
			$("#imgThree").animate({
				opacity:1
			},speed,function(){
				$("#imgFour").animate({
					opacity:1
				},speed,function(){
					$("#imgFive").animate({
						opacity:1
					},speed,function(){
						$("#imgSix").animate({
							opacity:1
						},speed,function(){
							$("#imgSeven").animate({
								opacity:1
							},speed,function(){
								$("#courseTitleRect").css("background-size","91.7% auto");
							});
						})
					})
				})
			})
		})
	});
}
$(function(){
	// 控制六边形切换逻辑
	$(".sexangleImg").mouseenter(function(){
		$(this).attr("src",$(this).attr("after"));

	});
	$(".sexangleImg").mouseleave(function(){
		$(this).attr("src",$(this).attr("before"));
	});
});
