function checkphone() {
  const screenWidth = window.innerWidth;
  if (screenWidth < 550) {
    console.log("Too small — skip scroll check");
    return;
  }

  const isScrollable = document.documentElement.scrollHeight > window.innerHeight;

  if (!isScrollable) {
    console.log("Not scrollable and wide enough");
  } 
  else {
    console.log("Scrollable and wide enough");
  }
}
function openmenu() {
  const phonechange = document.getElementById("menuicon");
  const phonechange2 = document.getElementById("menuicon1");
  const phonechange3 = document.getElementById("menuicon2");
  phonechange.className = "phoness";
  phonechange2.className = "phoness1";
  phonechange3.className = "phoness2";
}


window.addEventListener("load", checkphone);
window.addEventListener("resize", checkphone);
