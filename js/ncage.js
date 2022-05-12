$(document).ready(function(){
    
    setInterval(function(){
	$('img').each(function(){
		console.log('hola cage');
	    if(!$(this).hasClass("caged")){
		var number = 1 + Math.floor(Math.random() * 303);
		if(number < 11){
		    var image = chrome.extension.getURL("img/"+number+".jpg");
		}
		else{
		    var image = chrome.extension.getURL("img/"+number+".gif");
		}
		var width = $(this).width();
		var height = $(this).height();
		$(this).addClass("caged");
		$(this).attr("src",image);
		$(this).width(width);
		$(this).height(height);
	    }
	});
    },200);
});