// var tabDivs = ["tab1","tab2","tab3","tab4","tab5","tab6","tab7"];
var themeCount = 0;

function invisAll() {
	for (var i = 1; i <= 4; i++) {
		document.getElementById("tab"+i).style.display = "none";
	}
}

function showDiv(divNo) {
	invisAll();
	document.getElementById("tab" + divNo).style.display = "block";
}

function changeTheme() {
	var bodyC = document.body;
	var themeButton = document.getElementById("themeChanger");
	switch(themeCount){
		case 0:
			bodyC.classList.toggle("dark");
			bodyC.classList.toggle("light");
			themeButton.innerHTML = "Light Mode";
			break;
		case 1:
			bodyC.classList.toggle("light");
			bodyC.classList.toggle("monokai");
			themeButton.innerHTML = "Monokai Mode";
			break;
		case 2:
			bodyC.classList.toggle("monokai");
			bodyC.classList.toggle("strawberry");
			themeButton.innerHTML = "StrawBerry Mode";
			break;
		case 3:
			bodyC.classList.toggle("strawberry");
			bodyC.classList.toggle("dark");
			themeButton.innerHTML = "Dark Mode";
			break;
	}
	themeCount ++;
	themeCount %= 4;
}

// Anime.js Part starts here

var textTimeline = anime.timeline({
	easing: "linear",
	duration: 3000,
	autoplay: false,
	loop: false
});

textTimeline
	.add({
		targets: '#destux-D',
		rotateZ: '360',
		translateX: 0,
		// translateY : [
		// 	0,
		// 	-50,
		// 	50,
		// 	0],
		duration: 500
	})
	.add({
		targets: '#destux-e',
		rotateZ: '360',
		translateX: 0,
		// translateY : [
		// 	0,
		// 	-50,
		// 	50,
		// 	0],
		duration: 500
	})
	.add({
		targets: '#destux-s',
		rotateZ: '360',
		translateX: 0,
		// translateY : [
		// 	0,
		// 	-50,
		// 	50,
		// 	0],
		duration: 500
	})
	.add({
		targets: '#destux-t',
		rotateZ: '360',
		translateX: 0,	
		// translateY : [
		// 	0,
		// 	-50,
		// 	50,
		// 	0],
		duration: 500
	})
	.add({
		targets: '#destux-u',
		rotateZ: '360',
		translateX: 0,
		// translateY : [
		// 	0,
		// 	-50,
		// 	50,
		// 	0],
		duration: 500
	})
	.add({
		targets: '#destux-x',
		rotateZ: '360',
		translateX: 0,
		// translateY : [
		// 	0,
		// 	-50,
		// 	50,
		// 	0],
		duration: 500
	});

document.querySelector("#textPlayButton").onclick = textTimeline.play;

var setupTimeline = anime.timeline({
  easing: 'easeOutElastic(1,0.6)',
  duration: 2500,
  autoplay: false
});

setupTimeline
	.add({
		targets: '#desk',
		translateX: [-6000,0],
		duration: 500,
	})
	.add({
		targets: '#laptop',	
		translateX: [600,0],
		duration: 500,
	})
	.add({
		targets: '#computer',
		translateX: [-600,0],
		duration: 500,
	})
	.add({
		targets: '#cup',
		translateX: [600,0],
		duration: 500,
	})
	.add({
		targets: '#human-body',
		translateX: [-600,0],
		duration: 500,
	});

document.querySelector("#setupPlayButton").onclick = setupTimeline.play;

var beerTimeline = anime.timeline({
	easing: 'linear',
	duration: 5000,
	autoplay: false
})

// beerTimeline
// .add({
	// targets: '#beer-glass',
	// translateY: -120,
	// duration: 500
	// bottle goes up
// })
// .add({
	// targets: '#beer-glass',
	// rotateZ: 52			//somehow make this work pless 🤕
	// bottle tilts
// })
// .add({
	// beer droping effects
// })
// .add({
	// beer filling 1,2,3......
// })
// .add({
	// beer full effects
// });