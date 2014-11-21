$(function(){
	//右侧面板导航元素宽度自适应
	if($(".conPanelNav").length>0){
		var ratio = 1 / $(".conPanelNav li").length;
		var ratioStr = ratio*100+"%";
		$(".conPanelNav li").css("width",ratioStr);
	}
});