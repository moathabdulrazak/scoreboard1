


let homeScore = 0
let awayScore = 0


function home1() {
  homeScore += 2
  console.log("Home score:", homeScore);
  drawCode()
}
function home2() {
  homeScore += 3
  console.log("Home score:", homeScore);
  drawCode()
}
function away1() {
  awayScore += 2;
  console.log("Away score:", awayScore);
  drawCode()
}
function away2() {
  awayScore += 3;
  console.log("Away score:", awayScore);
  drawCode()
}


function clearCode() {
  homeScore = 0
  awayScore = 0
  drawCode()
}

function drawCode() {
  let codeElm = document.getElementById("homeSide")
  // @ts-ignore
  codeElm.innerHTML = homeScore
  let codeeElm = document.getElementById('awaySide')
  // @ts-ignore
  codeeElm.innerHTML = awayScore
}



