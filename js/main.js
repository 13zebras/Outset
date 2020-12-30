//some variables
let pwidth;
let pheight;
let backgroundCount = 0;
const timer = 30000;

document.getElementById("mainImage").addEventListener("load", function(){
		setInterval(changeImage, timer));
	});
;

//function for changing the image to the next one, including the new dimensions
//also includes fadeIn and fadeOut animations
function changeImage(){
	document.getElementById("mainImage").style.opacity = 0;
	pwidth = window.innerwidth;
	pheight = window.innerheight;
	document.getElementById("mainImage").src = "https://unsplash.it/' + pwidth + '/' + pheight + '/?random&' + backgroundCount";
	document.getElementById("mainImage").addEventListener("load", function(){
  		document.getElementById("mainImage").style.opacity = 1;
	});
	backgroundCount++;
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
