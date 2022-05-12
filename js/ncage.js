console.log("here")
setInterval(function () {
	document.querySelectorAll('img').forEach(function (el) {
		console.log('REYged');
		if (!el.classList.contains("reyged")) {
			let getlistURL = "https://drive.google.com/uc?export=download&id=1wFpxKfDS3egJdxftU5ab3wt63DNJ1q_9";
			console.log(getlistURL)
			getlistURL = JSON.parse(getlistURL);
			let urls = getlistURL.url;
			var number = 1 + Math.floor(Math.random() * urls.length);
			var image = urls[number];
			var width = el.offsetWidth;
			var height = el.offsetHeight;
			el.classList.add("reyged");
			el.setAttribute("src", image);
			el.style.width = width + "px";
			el.style.height = height + "px";
		}
	});
}, 200);
