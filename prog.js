const price = [100,200,300,400]
const market = [150, 300, 500, 700]
const names_cards = ["Rabbit", "Guinea Pig", "Chicken", "Duck", "Turkey", "Pig", "Goat", "Sheep","Donkey", "Horse", "Tiger", "Lion"]
const img_cards = ["pic/rabbit_pic.jpg", "pic/guinea_pig_pic.jpg", "pic/chicken_pic.jpg", "pic/duck_pic.jpg","pic/turkey_pic.jpg", "pic/pig_pic.jpg", "pic/goat_pic.jpg", "pic/sheep_pic.jpg", "pic/donkey_pic.jpg","pic/horse_pic.jpg","pic/tiger_pic.jpg","pic/lion_pic.jpg"]
const main_point = document.getElementById("cost_sell_main");
function openPopup() {
    document.getElementById('popup').classList.add('show');
}
function closePopup() {
    document.getElementById('popup').classList.remove('show');
}
function openPopuplogin() {
    document.addEventListener("keydown", login_pass);
    document.getElementById('login_in').classList.add('show');
    document.getElementById("login_in_user").addEventListener("input", login_pass);
    document.getElementById("login_in_pass").addEventListener("input", login_pass);
}
function closePopuplogin() {
    document.removeEventListener("keydown", login_pass);
    document.getElementById('login_in').classList.remove('show');
    document.removeEventListener("login_in_user", login_pass);
    document.removeEventListener("login_in_pass", login_pass);
}
function opensignup() {
    document.addEventListener("keydown", signup_pass);
    document.getElementById('signup').classList.add('show');
    document.getElementById("Signup_user").addEventListener("input", signup_pass);
    document.getElementById("signup_pass").addEventListener("input", signup_pass);
    document.getElementById("repeat_pass").addEventListener("input", signup_pass);
}
function closesignup() {
    document.getElementById('signup').classList.remove('show');
    document.removeEventListener("Signup_user", signup_pass);
    document.removeEventListener("signup_pass", signup_pass);
    document.removeEventListener("repeat_pass", signup_pass);
    document.removeEventListener("keydown", signup_pass);
}
function sell() {
    remove_buy_sell()
    starter()
    for(let i = 1; i <= names_cards.length; ++i) {
        document.getElementById(`Cost_Sell_${i}`).innerHTML = `Sell: ${market[i-1]}`;
    }
}
function upgrades() {
    remove_buy_sell()
    const ss = document.createElement("h1");
    ss.textContent = "Coming soon";
}
function buy() {
    remove_buy_sell()
    starter()
}
function starter() {
    for (let i = 0; i < names_cards.length; i++) {
        const button = document.createElement("button");
        button.className = "Box_Card";

        const title = document.createElement("h1");
        title.textContent = names_cards[i];

        const img = document.createElement("img");
        img.src = img_cards[i];
        img.className = "card_pic";

        const owned = document.createElement("div");
        owned.className = "Owneds_Card";
        owned.innerHTML = `<h3>Owned:</h3><h3 id="Owned_${i + 1}">0</h3>`;

        const cost = document.createElement("h3");
        cost.id = `Cost_Sell_${i+1}`;
        cost.textContent = `Cost: ${price[i]}`;

        button.append(title, img, owned, cost);
        main_point.appendChild(button);
    }
}
function remove_buy_sell() {
    const container = document.getElementById("cost_sell_main");
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}
starter()



function signup_pass() {
    let pass = document.getElementById("signup_pass");
    let rpass = document.getElementById("repeat_pass");
    let username = document.getElementById("Signup_user");

    let spass = pass.value;
    let rspass = rpass.value;
    let user = username.value;

    if (spass === rspass && spass.length > 0 && rspass.length > 0 && user.length > 0) {
        document.getElementById('submit_signup').disabled = false;
    } else {
        document.getElementById('submit_signup').disabled = true;
    }
}
function login_pass() {
    let loginpass = document.getElementById("login_in_pass");
    let usernames = document.getElementById("login_in_user");

    let lpass = loginpass.value;
    let users = usernames.value;
    
    if (lpass.length > 0 && users.length > 0) {
        document.getElementById('submit_login').disabled = false;
    } else {
        document.getElementById('submit_login').disabled = true;
    }
}


