$(function(){
	var height = $(window).height()+ document.body.offsetHeight;
	$('.shadeForHighlight').css('height',height);
	//隐藏侧边栏
	$('#hideRightBar').click(function(){
		$('.rightBar').transit({
				x:100
		},function(){
			$('#showRightBar').fadeIn(function(){
				$('.coursePanel').transit({
					x:$('.rightBar').width()
				});
			});
			turnLightOn();
		});
	});
	//显示侧边栏
	$('#showRightBar').click(function(){
		$('#showRightBar').fadeOut(function(){
			$('.coursePanel').transit({
				x:0
			},function(){
				$('.rightBar').transit({
					x:0
				});
				turnLightOff();
			});
		});
	});
});

//开灯操作
function turnLightOn(){

	$('.shadeForHighlight').fadeIn();
}

function turnLightOff(){
	$('.shadeForHighlight').fadeOut();
}