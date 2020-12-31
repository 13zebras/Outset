const timer = 20000;

setTimeout(function changeImage() {
	console.log("changeImage function started");
	document.getElementById("imgLd").style.display = "none";
	const mainImg = document.getElementById("mainImage");
	mainImg.classList.replace("one", "zero");
	const pwidth = document.getElementById("allContent").clientWidth;
	const pheight = document.getElementById("allContent").clientHeight;
	const timeStamp = new Date().getTime();
	const unsplashURL = 'https://loremflickr.com/' + pwidth + '/' + pheight + '/city,night/all?' + timeStamp;
	mainImg.src = unsplashURL;
	mainImg.addEventListener("load", function(){
		document.getElementById("imgLd").style.display = "block";
		mainImg.classList.replace("zero", "one");
	});
	setTimeout(changeImage, timer);
	
}, timer);
