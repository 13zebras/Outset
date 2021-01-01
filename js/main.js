const timer = 20000;

function changeImage() {
	console.log("changeImage function started");
	const mainImg = document.getElementById("mainImage");
	mainImg.style.opacity = 0;
	const pwidth = document.getElementById("allContent").clientWidth;
	const pheight = document.getElementById("allContent").clientHeight;
	const timeStamp = new Date().getTime();
	const unsplashURL = 'https://loremflickr.com/' + pwidth + '/' + pheight + '/city,night/all?' + timeStamp;
	mainImg.src = unsplashURL;
	mainImg.addEventListener("load", function(){
		setTimeout(function(){
			mainImg.style.opacity = 1;
		}, 1100)
	});
	setTimeout(changeImage, timer);
};

if (document.readyState == 'loading') {
    // still loading, wait for the event
    document.addEventListener('DOMContentLoaded', changeImage);
} else {
    // DOM is ready!
    changeImage();
}