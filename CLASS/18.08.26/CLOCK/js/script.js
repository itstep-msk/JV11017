var arrowHour = document.querySelector(".hour");
var arrowMinute = document.querySelector(".minute");
var arrowSecond = document.querySelector(".second");

function clock() {
	var date = new Date();
	var hour = date.getHours();
	var minute = date.getMinutes();
	var second = date.getSeconds();

	arrowHour.style.transform = "rotateZ(" + 360/12*hour + "deg)";
	arrowMinute.style.transform = "rotateZ(" + 360/60*minute + "deg)";
	arrowSecond.style.transform = "rotateZ(" + 360/60*second + "deg)";
}

setInterval(clock, 1000)