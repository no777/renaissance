$(function(){
	$("#makeStars").rating({
		'size':'xs',
		'showClear':false,
		'showCaptions':false,
		'step':1,
		'clearCaption':'尚未评价',
		'starCaptions':{
			1: '难以忍受',
			2: '不值一学',
			3: '马马虎虎',
			4: '非常有用',
			5: '精彩至极'
		}
	});
});