$(function(){
	//左侧操作栏过度
	$(".leftControls li").mouseenter(function(){
		$(this).children().transit({
			y:-200-$(this).children().height()
		},800);
	});
	$(".leftControls li").mouseleave(function(){
		$(this).children().transit({
			y:0
		},800);
	});
});