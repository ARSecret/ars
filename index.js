const soundA = new Audio("sounds/a.mp3")
const soundB = new Audio("sounds/b.mp3")
const soundC = new Audio("sounds/с.mp3")

window.onkeydown = function(e) {
	switch (e.key) {
		case "а": soundA.play(); break;
		case "б": soundB.play(); break;
		case "с": soundC.play(); break;
	}
}
