$(document).ready(function(){
    
    setInterval(function(){
	$('img').each(function(){
		console.log('REYged');
	    if(!$(this).hasClass("reyged")){
		var number = 1 + Math.floor(Math.random() * 77);
		    var image = chrome.extension.getURL("img/"+number+".png");

			

		var width = $(this).width();
		var height = $(this).height();
		$(this).addClass("reyged");
		$(this).attr("src",image);
		$(this).width(width);
		$(this).height(height);
	    }
	});
    },200);
});