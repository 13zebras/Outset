const timer = 20000;

setTimeout(function changeImage() {
	const mainImg = document.getElementById("mainImage");
	mainImg.classList.replace("one", "zero");
	const pwidth = document.getElementById("allContent").clientWidth;
	const pheight = document.getElementById("allContent").clientHeight;
	const timeStamp = new Date().getTime();
	const unsplashURL = 'https://loremflickr.com/' + pwidth + '/' + pheight + '/city,night/all?' + timeStamp;
	mainImg.src = unsplashURL;
	mainImg.addEventListener("load", function(){
  		mainImg.classList.replace("zero", "one");
	});
	setTimeout(changeImage, timer);
	
}, timer);
