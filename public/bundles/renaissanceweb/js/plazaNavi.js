var current_id=0;
var to_recover=false;
var ischange=false;
$("#left_panel div").mouseenter(readyShow);
function initShow(){
	              to_recover=false;
	             $("#left_panel li").stop();
		$("#left_panel li").transit({
		   x: -200
		},300,function(){
		//console.log("count=="+count);
		     if(to_recover)return;
		     $("#hide_icon li").bind('mouseenter',readyShowContent);
		     $("#hide_icon").show();     
		     $("#hide_content").show();
		});			
}
function initHide(){
	to_recover=true;
	$("#left_panel li").stop();
	ischange=false;
	var dom=$(this);
	$("#m"+current_id).removeClass('active');
	$("#left_panel div").bind('mouseenter',readyShow);
	 $("#hide_icon li").bind('mouseenter',readyShowContent);
	$("#p"+current_id).hide();
              $("#hide_icon").hide();
	$("#hide_content").hide();
	$("#left_panel li").transit({
		   x:0
		},300,function(){	
		
		});
}
$("#mp").mouseenter(initShow);
$("#mp").mouseleave(function (){
	initHide();
});
$("#hide_icon li").mouseenter(readyShowContent);
function readyShowContent()
{ 	
	var dom=$(this);
	var id =dom.attr("id");
	if(id[1]!=current_id)
	{
	    dom.unbind('mouseenter');
	    $("#left_panel div").unbind('mouseenter');
	    $("#m"+current_id).removeClass('active');
	    $("#p"+current_id).hide();
	    current_id=id[1];
	   showContent(id[1],dom);
	}
}
function showContent(i,dom)
{     
	　　　$("#m"+i).addClass('active');
	            $("#p"+i).show();     
	           dom.bind('mouseenter',readyShowContent);
}
function readyShow(){
	
	             if(ischange)return;
		var dom=$(this);
		var id =dom.attr("id");
		$("#hide_icon li").unbind('mouseenter');
	              dom.unbind('mouseenter');	
		current_id=id[1];
		changeShow(id[1],dom);
		ischange=true;
	}
function changeShow(i,dom)
{                 
	　　　$("#m"+i).addClass('active');
	            $("#p"+i).show();

}
function changeHide(i,dom)
{                                      
	
	              $("#m"+i).removeClass('active');
	              $("#p"+i).hide();
	              dom.bind('mouseenter',readyShow);            

}