$(function(){
	//导航贴边自适应
	warpLoc(className);

	$(window).resize(function(){
		warpLoc();
	});

});

