//some variables

const timer = 30000;

function slideShow(){
	setInterval(changeImage(), timer);
}

//function for changing the image to the next one, including the new dimensions
//also includes fadeIn and fadeOut animations
function changeImage(){
	document.getElementById("mainImage").style.opacity = 0;
	const pwidth = document.getElementById("allContent").clientWidth;
	const pheight = document.getElementById("allContent").clientHeight;
	//https://loremflickr.com/1920/1080/city,night/all
	const unsplashURL = 'https://loremflickr.com/' + pwidth + '/' + pheight + '/city,night/all';
	document.getElementById("mainImage").src = unsplashURL;
	document.getElementById("mainImage").addEventListener("load", function(){
  		document.getElementById("mainImage").style.opacity = 1;
	});
}




	//check if the blur checkbox is ticked
	
	/*if (document.getElementById('blur').checked) {
        
		$('#mainImage').attr('src', 'https://unsplash.it/' + pwidth + '/' + pheight + '/?random&blur&' + backgroundCount);
    } else {
		$('#mainImage').attr('src', 'https://unsplash.it/' + pwidth + '/' + pheight + '/?random&' + backgroundCount);
	}
	
	//when image loaded, start the timer and show image
	
	$('#mainImage').on('load', function(){
		$("#mainImage").fadeIn();
		restartTimer();
	});
	backgroundCount++;
	*/


//when hovering over an image show the details.
/*
function showDetails()
{
	$(".topOver").fadeIn();
}
*/


//when not hovering over an image hide details.
/*
function showDetailsEnd()
{	
	$(".topOver").fadeOut();
}

//when the timer is changed, set the new timer variable to what the user has entered, no input validation though
function setTimer()
{	
	var value = document.getElementById('timer').value;
	timer = value * 1000;
}

//basically to start the timer for the clock
function restartTimer()
{
	timePrompt = setTimeout(function(){
		changeImage();	
	}, timer);
}
*/
