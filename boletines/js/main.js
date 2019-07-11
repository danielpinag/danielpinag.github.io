let close = document.querySelectorAll(".close");
close.forEach(function (link) {
	link.addEventListener("click", function(ev){
		ev.preventDefault();

		let content = document.querySelector(".content");

		content.classList.remove("animated");
		content.classList.remove("zoomIn");

		content.classList.add("animated");
		content.classList.add("zoomOut");

		setTimeout(function(){
			location.href = "/boletines";
		},600);
	});
});

