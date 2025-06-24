const price = [100,200,300,400]
const market = [150, 300, 500, 700]
const buttons_cards = ["Chicken_Card","Turkey_Card","Pig_Card","Sheep_Card"]
const names_cards = ["Chicken", "Turkey", "Pig", "Sheep"]
const img_cards = ["pic/chicken_pic.jpg", "pic/turkey_pic.jpg", "pic/pig_pic.jpg", "pic/sheep_pic.jpg"]
const main_point = document.getElementById("cost_sell_main");
function openPopup() {
    document.getElementById('popup').classList.add('show');
}
function closePopup() {
    document.getElementById('popup').classList.remove('show');
}
function openPopuplogin() {
    document.getElementById('login_in').classList.add('show');
}
function closePopuplogin() {
    document.getElementById('login_in').classList.remove('show');
}
function opensignup() {
    document.getElementById('signup').classList.add('show');
}
function closesignup() {
    document.getElementById('signup').classList.remove('show');
}
function sell() {
    remove_buy_sell()
    starter()
    for(let i = 1; i <= 4; ++i) {
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
    for(let i = 1; i <= 4; ++i) {
        document.getElementById(`Cost_Sell_${i}`).innerHTML = `Cost: ${price[i-1]}`;
    }
}
function starter() {
    for (let i = 0; i < names_cards.length; i++) {
        const button = document.createElement("button");
        button.className = buttons_cards[i];

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
