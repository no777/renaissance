function toNextPage (object,next_page,path,callback) {
	//alert(object);
	$dom=$("#"+object);
	$.ajax({
		url:path,
		data:{object:object,pageno:next_page},
		type:'get',
		dataType:'html',
		success:function(html){
			callback();
			setTimeout(function(){
				$dom.append(html)
			},500);
		}
	});
}