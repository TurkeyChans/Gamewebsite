const isScrollable = document.documentElement.scrollHeight > window.innerHeight;
let switchs = true;
const main_fun = document.getElementById("tops_button");
const list_buttons = ["buy()","sell()","upgrades()","opensignup()","openPopuplogin()"];
const names_list_buttons = ["Buy", "Sell", "Upgrades", "Signup", "Login"];
function checkphone() {
  switchs = false;
  menu();
  
  const screenWidth = window.innerWidth;
  if (screenWidth < 550) {
    console.log("Too small — skip scroll check");
    
  }
}

function loadin() {
  const isScrollable = document.documentElement.scrollHeight > window.innerHeight;
  if (!isScrollable) {
    clear();
  }

  if (isScrollable) {
    goback();
  }
}
function menu() {
  
  if(switchs) {
    openmenu();
  }
  else {
    closemenu();
  }
  
}
function openmenu() {
  const phonechange = document.getElementById("menuicon");
  const phonechange2 = document.getElementById("menuicon1");
  const phonechange3 = document.getElementById("menuicon2");
  phonechange.className = "phoness";
  phonechange2.className = "phoness1";
  phonechange3.className = "phoness2";
  switchs = false;
}
function closemenu() {
  const phonechange = document.getElementById("menuicon");
  const phonechange2 = document.getElementById("menuicon1");
  const phonechange3 = document.getElementById("menuicon2");
  phonechange.className = "phones";
  phonechange2.className = "phones1";
  phonechange3.className = "phones2";
  switchs = true;
}

function clear() {
  const container = document.getElementById("tops_button");
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}
function placement() {
}
function goback() {
  if(!document.getElementById("tops_button_pc")) {
    for(let i = 0; i < names_list_buttons.length; ++i) {
      const buttons = document.createElement("button");
      buttons.setAttribute("onclick", list_buttons[i]);
      buttons.textContent = names_list_buttons[i]
      main_fun.appendChild(buttons);
    }
    main_fun.id = "tops_button_pc";
  }
  const moneyss = document.createElement("div");
  moneyss.className = "moneyss";
  moneyss.id = "moneysss";
  const word_money = document.createElement("p");
  word_money.textContent = "Money:";
  
  const word_money_safe = document.createElement("p");

  word_money_safe.id = "Money";
  word_money_safe.textContent = "0";
  moneyss.append(word_money,word_money_safe);
  main_fun.appendChild(moneyss);

}


window.addEventListener("load", loadin);
window.addEventListener("resize", checkphone);
