const soundA = new Audio("sounds/a.mp3") 
const soundB = new Audio("sounds/b.mp3") 
const soundV = new Audio("sounds/v.mp3") 
const soundG = new Audio("sounds/g.mp3")
const soundD = new Audio("sounds/d.mp3")
const soundE = new Audio("sounds/e.mp3")
const soundEE = new Audio("sounds/ee.mp3") // ё
const soundSS = new Audio("sounds/ss.mp3") // ж
const soundZ = new Audio("sounds/z.mp3")
const soundI = new Audio("sounds/i.mp3")
const soundII = new Audio("sounds/ii.mp3") // й
const soundK = new Audio("sounds/k.mp3")
const soundL = new Audio("sounds/l.mp3")
const soundM = new Audio("sounds/m.mp3")
const soundN = new Audio("sounds/n.mp3")
const soundO = new Audio("sounds/o.mp3")
const soundP = new Audio("sounds/p.mp3")
const soundR = new Audio("sounds/r.mp3")
const soundS = new Audio("sounds/s.mp3")
const soundT = new Audio("sounds/t.mp3")
const soundU = new Audio("sounds/u.mp3") // у
const soundF = new Audio("sounds/f.mp3")
const soundX = new Audio("sounds/x.mp3")
const soundQ = new Audio("sounds/q.mp3")  // ц
const soundSHQ = new Audio("sounds/shq.mp3") // ч
const soundSH = new Audio("sounds/sh.mp3") // ш
const soundSHSH = new Audio("sounds/shsh.mp3") // щ
const soundOUPS = new Audio("sounds/oups.mp3") // ъ
const soundIIE = new Audio("sounds/iie.mp3") // ы
const soundOUPS1 = new Audio("sounds/oups1.mp3") // ь
const soundEEY = new Audio("sounds/eey.mp3") // э
const soundUY = new Audio("sounds/uy.mp3") // ю
const soundAY = new Audio("sounds/ay.mp3") // я


window.onkeydown = function(e) {
	switch (e.key) {
		case "а": soundA.play(); break;
		case "б": soundB.play(); break;
		case "в": soundV.play(); break;
		case "г": soundG.play(); break;
		case "д": soundD.play(); break;
		case "е": soundE.play(); break;
		case "ё": soundEE.play(); break;
		case "ж": soundSS.play(); break;
		case "з": soundZ.play(); break;
		case "и": soundI.play(); break;
		case "й": soundII.play(); break;
		case "к": soundK.play(); break;
		case "л": soundL.play(); break;
		case "м": soundM.play(); break;
		case "н": soundN.play(); break;
		case "о": soundO.play(); break;
		case "п": soundP.play(); break;
		case "р": soundR.play(); break;
		case "с": soundS.play(); break;
		case "т": soundT.play(); break;
		case "у": soundU.play(); break;
		case "ф": soundF.play(); break;
		case "х": soundX.play(); break;
		case "ц": soundQ.play(); break;
		case "ч": soundSHQ.play(); break;
		case "ш": soundSH.play(); break;
		case "щ": soundSHSH.play(); break;
		case "ъ": soundOUPS.play(); break;
		case "ы": soundIIE.play(); break;
		case "ь": soundOUPS1.play(); break;
		case "э": soundEEY.play(); break;
		case "ю": soundUY.play(); break;
		case "я": soundAY.play(); break;
	}
}
