const letters = [
	{ name: "а", sound: new Audio("sounds/a.mp3"), place: "в четвертом ряду, место пять", placeAudio: new Audio("sounds/45.mp3") },
	{ name: "б", sound: new Audio("sounds/b.mp3"), place: "в третьем ряду, место четыре", placeAudio: new Audio("sounds/34.mp3") },
	{ name: "в", sound: new Audio("sounds/v.mp3"), place: "в пятом ряду, место девять", placeAudio: new Audio("sounds/59.mp3") },
	{ name: "г", sound: new Audio("sounds/g.mp3"), place: "в третьем ряду, место восемь", placeAudio: new Audio("sounds/38.mp3") },
	{ name: "д", sound: new Audio("sounds/d.mp3"), place: "в третьем ряду, место десять", placeAudio: new Audio("sounds/310.mp3") },
	{ name: "е", sound: new Audio("sounds/e.mp3"), place: "в третьем ряду, место шесть", placeAudio: new Audio("sounds/36.mp3") },
	{ name: "ё", sound: new Audio("sounds/ee.mp3"), place: "в пермом ряду, место первое", placeAudio: new Audio("sounds/11.mp3") },
	// { name: "ж", sound: new Audio("sounds/ss.m4a"), place: "..." }, // ж
	// { name: "з", sound: new Audio("sounds/z.m4a"), place: "..." },
	// { name: "и", sound: new Audio("sounds/i.m4a"), place: "..." },
	// { name: "й", sound: new Audio("sounds/ii.m4a"), place: "..." }, // й
	// { name: "к", sound: new Audio("sounds/k.m4a"), place: "..." },
	// { name: "л", sound: new Audio("sounds/l.m4a"), place: "..." },
	// { name: "м", sound: new Audio("sounds/m.m4a"), place: "..." },
	// { name: "н", sound: new Audio("sounds/n.m4a"), place: "..." },
	// { name: "о", sound: new Audio("sounds/o.m4a"), place: "..." },
	// { name: "п", sound: new Audio("sounds/p.m4a"), place: "..." },
	// { name: "р", sound: new Audio("sounds/r.m4a"), place: "..." },
	// { name: "с", sound: new Audio("sounds/s.m4a"), place: "..." },
	// { name: "т", sound: new Audio("sounds/t.m4a"), place: "..." },
	// { name: "у", sound: new Audio("sounds/u.m4a"), place: "..." }, // у
	// { name: "ф", sound: new Audio("sounds/f.m4a"), place: "..." },
	// { name: "х", sound: new Audio("sounds/x.m4a"), place: "..." },
	// { name: "ц", sound: new Audio("sounds/q.m4a"), place: "..." }, // ц
	// { name: "ч", sound: new Audio("sounds/shq.m4a"), place: "..." }, // ч
	// { name: "ш", sound: new Audio("sounds/sh.m4a"), place: "..." }, // ш
	// { name: "щ", sound: new Audio("sounds/shsh.m4a"), place: "..." }, // щ
	// { name: "ъ", sound: new Audio("sounds/oups.m4a"), place: "..." }, // ъ
	// { name: "ы", sound: new Audio("sounds/iie.m4a"), place: "..." }, // ы
	// { name: "ь", sound: new Audio("sounds/oups1.m4a"), place: "..." }, // ь
	// { name: "э", sound: new Audio("sounds/ee.m4a"), place: "..." }, // э
	// { name: "ю", sound: new Audio("sounds/uy.m4a"), place: "..." }, // ю
	// { name: "я", sound: new Audio("sounds/ay.m4a"), place: "..." } // я
]

let current = 0;
const letsPlay = new Audio("sounds/letsPlay.mp3")
const letsFind = new Audio("sounds/letsFind.mp3")
const youPressSound = new Audio("sounds/youPress.mp3")
const youGoodSound = new Audio("sounds/youGood.mp3")
const tryAgainSound = new Audio("sounds/tryAgain.mp3")


function changeText(text) {
	let textElement = document.getElementById("text")
	textElement.innerHTML = text;
}

function letterVoiceover() {

}

document.getElementById("start").onclick = function() {
	this.style.display = "none";
	document.getElementById("title").style.display = "block";
	changeText("Давайте найдем букву " + letters[current].name.toUpperCase() + "<br>" + letters[current].place)
	letsPlay.play();
	setTimeout(function() {
		letters[current].placeAudio.play();
	}, 4500)


	setTimeout(function() {
		window.onkeydown = function(e) {
			if (e.key === letters[current].name) {
				youPressSound.play();
				setTimeout(function() {
					letters[current].sound.play();
				}, 3000);

				setTimeout(function() {
					youGoodSound.play();
				}, 4000);

				setTimeout(function() {
					if (current < letters.length - 1) {
						current++;
						changeText("Давайте найдем букву " + letters[current].name.toUpperCase() + "<br>" + letters[current].place)
						letters[current].placeAudio.play();
					} else {
						current = 0;
						changeText("Давайте найдем букву " + letters[current].name.toUpperCase() + "<br>" + letters[current].place)
						letters[current].placeAudio.play();
					}
				}, 7000);
			} else {
				tryAgainSound.play();
			}
		}
	}, 7000);
}
