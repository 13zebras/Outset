const timer = 20000;

setTimeout(function changeImage() {
	console.log("changeImage function started");
	const mainImg = document.getElementById("mainImage");
	mainImg.classList.replace("one", "zero");
	console.log("class one changed to zero");
	const pwidth = document.getElementById("allContent").clientWidth;
	const pheight = document.getElementById("allContent").clientHeight;
	const timeStamp = new Date().getTime();
	const unsplashURL = 'https://loremflickr.com/' + pwidth + '/' + pheight + '/city,night/all?' + timeStamp;
	mainImg.src = unsplashURL;
	console.log("URL changed");
	mainImg.addEventListener("load", function(){
  		console.log("image loaded, but has it painted yet?");
		mainImg.classList.replace("zero", "one");
		console.log("class zero changed to one");
	});
	setTimeout(changeImage, timer);
	
}, timer);
