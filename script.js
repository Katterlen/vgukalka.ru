alert("Как то так..")
var score = 0;
updating = 1;
function clickBtn() {
  score = score + updating;
  document.getElementsByTagName("h1")[0].firstChild.data = score + "$";
}

function update() {
  score = score - 50;
  document.getElementsByTagName("h1")[0].firstChild.data = score + "$";
  if1();
  updating += 10;
}
function update1() {
  score = score - 100;
  document.getElementsByTagName("h1")[0].firstChild.data = score + "$";
  if1();
  updating += 20;
}
function update2() {
  score = score - 200;
  document.getElementsByTagName("h1")[0].firstChild.data = score + "$";
  if1();
  updating += 30;


}
function update3() {
  score = score - 300;
  document.getElementsByTagName("h1")[0].firstChild.data = score + "$";
  if1();
  updating += 100;
}
function auto() {
  score = score - 10;
  document.getElementsByTagName("h1")[0].firstChild.data = score + "$";
  if1();
  setTimeout("plusauto()", 1000);
}
function if1 () {
  if (score < -100) {
    document.write("Вы проиграли, так-как вы превысили лимит кредита");
  }

}
