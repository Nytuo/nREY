let getlistURL = "https://raw.githubusercontent.com/Nytuo/nREY/main/urls.json";
fetch(getlistURL).then((response) => {
	return response.json();
}).then((data) => {
	let urls = data.urls;
	console.log(data);
	document.querySelectorAll('img').forEach(function (el) {
		console.log('REYged');
		if (!el.classList.contains("reyged")) {
			var number = Math.floor(Math.random() * urls.length);
			var image = urls[number];
			var width = el.offsetWidth;
			var height = el.offsetHeight;
			el.classList.add("reyged");
			el.setAttribute("src", image);
			el.style.width = width + "px";
			el.style.height = height + "px";
		}

	});


});

