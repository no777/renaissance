$(function(){
	//浏览器内核判断
	var userAgent = navigator.userAgent.toLowerCase(); 

	// Figure out what browser is being used 

	jQuery.browser = { 

	version: (userAgent.match( /.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/ ) || [])[1], 

	safari: /webkit/.test( userAgent ), 

	opera: /opera/.test( userAgent ), 

	msie: /msie/.test( userAgent ) && !/opera/.test( userAgent ), 

	mozilla: /mozilla/.test( userAgent ) && !/(compatible|webkit)/.test( userAgent ) 

	}; 
	// //火狐以及IE需要重构滚动条
	// if($(".conPanelCon").length>0 && ($.browser.mozilla || $.browser.msie)){
	// 	$(".conPanelCon").mCustomScrollbar();
	// }
	//左侧导航贴边自适应
	warpLoc();
	$(window).resize(function(){
		warpLoc();
	});
	// 头像拉出菜单
	$('.headPic').click(function(){
		if($('#search_content').width()!=0)
			$("#search_content").animate({
				width:0,
				opacity:0
			},'slow',function(){
				$("#search_content").hide();
			});
		if($('#settingsMenu').width()==0){
			$('.search').fadeOut();
			$('#settingsMenu').fadeTo('fast',0,function(){
				$('#settingsMenu').animate({
					width:250,
					opacity:1
				},'slow');
			});
		}
		else{
			$('#settingsMenu').animate({
				width:0,
				opacity:0
			},'slow',function(){
				$('.search').fadeIn();
			});
		}	
	});

	//拉出搜索框
	$('.search').click(function(){
		if($("#search_content").width()==0){
			$("#search_content").fadeTo('fast',0,function(){
				$("#search_content").animate({
					width:200,
					opacity:1
				},'slow');
			});
			
		}
		else{
			$("#search_content").animate({
				width:0,
				opacity:0
			},'slow',function(){
				$("#search_content").hide();
			});
		}
	});

	//右侧面板导航元素宽度自适应
	if($(".conPanelNav").length>0){
		var ratio = 1 / $(".conPanelNav li").length;
		var ratioStr = ratio*100+"%";
		$(".conPanelNav li").css("width",ratioStr);
	}

	
});

function warpLoc(){
	top_css =parseInt($(".barItem.active").offset().top) - parseInt($(".leftBar ul").offset().top)+parseInt($(".leftBar .barItem").css("margin-top").replace('px',''))-10
	$(".imgWrap").css("top",top_css);
}