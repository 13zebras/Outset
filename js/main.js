const timer = 12000;

document.body.addEventListener("load", changeImage)

function changeImage() {
	console.log("changeImage function started");
	const mainImg = document.getElementById("mainImage");
	mainImg.style.opacity = 0;
	//mainImg.classList.replace("one", "zero");
	const pwidth = document.getElementById("allContent").clientWidth;
	const pheight = document.getElementById("allContent").clientHeight;
	const timeStamp = new Date().getTime();
	const unsplashURL = 'https://loremflickr.com/' + pwidth + '/' + pheight + '/city,night/all?' + timeStamp;
	mainImg.src = unsplashURL;
	mainImg.addEventListener("load", function(){
		setTimeout(function(){
			mainImg.style.opacity = 1;
		}, 1500)
	});
	setTimeout(changeImage, timer);
	
}

/*
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
*/
