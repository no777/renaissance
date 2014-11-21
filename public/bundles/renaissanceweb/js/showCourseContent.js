/*
*	courseTitleRect show detail
*	
*/



$(function(){
	//first:show up_row->r1 and down_row->r2
	$("#courseTitleRect").mouseenter(function(e){
		$("#ctr1").animate({opacity:1});
		$("#ctr2").animate({opacity:1});
	});
	$("#courseTitleRect").mouseleave(function(e){
		$("#ctr1").animate({opacity:0});
		$("#ctr2").animate({opacity:0});
	});
	//second:show every single block [up|down][index][block|button|content]->r[1|2][1-4][|b|c]
	//button-->content
	var speed="fast";
	//up
	$("#r11b").mouseenter(function(e){$("#r11c").slideDown(speed);});
	$("#r11b").mouseleave(function(e){$("#r11c").slideUp(speed);});
	$("#r12b").mouseenter(function(e){$("#r12c").slideDown(speed);});
	$("#r12b").mouseleave(function(e){$("#r12c").slideUp(speed);});
	$("#r13b").mouseenter(function(e){$("#r13c").slideDown(speed);});
	$("#r13b").mouseleave(function(e){$("#r13c").slideUp(speed);});
	//down
	$("#r21b").mouseenter(function(e){$("#r21c").slideDown(speed);});
	$("#r21b").mouseleave(function(e){$("#r21c").slideUp(speed);});
	$("#r22b").mouseenter(function(e){$("#r22c").slideDown(speed);});
	$("#r22b").mouseleave(function(e){$("#r22c").slideUp(speed);});
	$("#r23b").mouseenter(function(e){$("#r23c").slideDown(speed);});
	$("#r23b").mouseleave(function(e){$("#r23c").slideUp(speed);});
	$("#r24b").mouseenter(function(e){$("#r24c").slideDown(speed);});
	$("#r24b").mouseleave(function(e){$("#r24c").slideUp(speed);});
});