/*
*	处理formPanel的显示，切换login和register
*
*/


function showFormPanel(action){
	if(!$("#introVideo").is(":hidden")){
		//alert($("#introVideo").is(":hidden"));
		$("html,body").animate({
			scrollTop:$("#introRect").offset().top
		},500,function(){
			if(action==1){
				$("#formTitle").text("登录账号");
				$("#formAction").text("");
				$("#formAction").append('注册 <i class="fa fa-arrow-circle-o-right"></i>');
				$("input[name=action]").val("1");
				$("#doAction").text("登录");
				//*
				$("#formCheckBox").show();
				$("#doAction").css("margin-top","0px");
			}
			if(action==2){
				$("#formTitle").text("马上注册");
				$("#formAction").text("");
				$("#formAction").append('登录 <i class="fa fa-arrow-circle-o-right"></i>');
				$("input[name=action]").val("2");
				$("#doAction").text("注册");
				//*
				//*
				$("#formCheckBox").hide();
				$("#doAction").css("margin-top","25px");
			}
			$("#introVideo").fadeOut(500,function(){
				//$("#formpanel").attr("class","col-xs-3 col-xs-offset-7");
				$(".regLog").fadeIn();
			});
		});
	}else{
		//alert(action); //是现在form的对立action
		
		//此刻可以异步滚动
		$("html,body").animate({
			scrollTop:$("#introRect").offset().top
		},500);
		
		if(action==$("input[name=action]").val()){
			return;
		}
		if(action==1){
			$("#formAction").fadeOut(200,function(){
				$("#formAction").text("");
				$("#formAction").append('注册 <i class="fa fa-arrow-circle-o-right"></i>');
				$("#formAction").fadeIn();
			});
			$("#formTitle").fadeOut(500,function(){
				$("#formTitle").text("登录账号");
				$("#formTitle").fadeIn();
			});
			$("#doAction").fadeOut(500,function(){
				$("#doAction").text("登录");
				$("#doAction").css("margin-top","0px");
				$("#formCheckBox").fadeIn(400,function(){$("#doAction").fadeIn(600);});
			});
			$("input[name=action]").val("1");
		}
		if(action==2){
			$("#formAction").fadeOut(200,function(){
				$("#formAction").text("");
				$("#formAction").append('登录 <i class="fa fa-arrow-circle-o-right"></i>');
				$("#formAction").fadeIn();
			});
			$("#formTitle").fadeOut(500,function(){
				$("#formTitle").text("马上注册");
				$("#formTitle").fadeIn();
			});
			$("#formCheckBox").fadeOut(500);
			$("#doAction").fadeOut(500,function(){
				$("#doAction").text("注册");
				$("#doAction").css("margin-top","25px");
				$("#doAction").fadeIn();
			});
			$("input[name=action]").val("2");
				//*
		}
	}
}

$(function(){
	//************************tologinXX
	$("#toLogin").click(function(){showFormPanel(1);});
	$("#toLogin1").click(function(){showFormPanel(1);});
	//************************toRegXX
	$("#regBtn").click(function(){showFormPanel(2);});
	$("#toReg").click(function(){showFormPanel(2);});
	//************************formAction
	$("#formAction").click(function(){showFormPanel($("input[name=action]").val()==1?2:1);});
});