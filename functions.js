var picturesContainer = document.querySelector(".clothing-pictures");
var pictureFigures = document.querySelectorAll(".figure-pictures");
var largeWindow = document.querySelector(".large-window");
//TESTING:
console.log(pictureFigures);
window.addEventListener("scroll", function() {
	var windowScroll = this.scrollY;
	//TESTING: console.log(windowScroll);

	var item = windowScroll / 2;
	var otherItem = windowScroll / 40;

	// NOTE: New Method of Concactenation, the regular way ne marchait pas pour moi, mais enfin !
	document.querySelector(".logo").style.transform = `translateY(${item}%)`;
	// document.querySelector(".logo").style.transform = "translateY(" + item + "%");
	document.querySelector(".foreBird").style.transform = `translateY(-${otherItem}%)`;

	// PART 2
	//NOTE: NEW - getBoundClientRect() is like offSet in jQuery
	//IMPORTANT: research this and master it. It's great parallax effect
	if (windowScroll > picturesContainer.getBoundingClientRect().top - window.innerHeight / 1.5) {
		pictureFigures.forEach(function(currentValue, index) {
			setTimeout(function() {
				pictureFigures[index].classList.add("is-showing");
			}, 150 * (index + 1));
			// NOTE: IT WORKED
		});
	}

	//PART 6
	if (windowScroll > largeWindow.getBoundingClientRect().top) {
		console.log("YO");
	}
});
// il utilise jquery et je sais pas traduire
// setTimeout(function() {
//   currentValue(index).classList.add("is-showing");
// }, 150 * index+1)
