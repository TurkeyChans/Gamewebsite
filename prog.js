window.onload = openPopup;
window.onload = buy;
let price = [100,200,300,400]
let market = [150, 300, 500, 700]
function openPopup() {
    document.getElementById('popup').classList.add('show');
}
function closePopup() {
    document.getElementById('popup').classList.remove('show');
}
function sell() {
    const saved = localStorage.getItem("SavedHTML");
    document.body.innerHTML = saved;
    for(let i = 1; i <= 4; ++i) {
        document.getElementById(`Cost_Sell_${i}`).innerHTML = `Sell: ${market[i-1]}`;
    }
}
function buy() {
    const saved = localStorage.getItem("SavedHTML");
    document.body.innerHTML = saved;

    for(let i = 1; i <= 4; ++i) {
        document.getElementById(`Cost_Sell_${i}`).innerHTML = `Cost: ${price[i-1]}`;
    }
}
const saves = `
    <nav class="nav">
        <div class="top_buttons">
            <button onclick="buy()">Buy</button>
            <button onclick="sell()">Sell</button>
            <button onclick="">Upgrades</button>
            <button onclick="">Signup/Login</button>
        </div>
        <div class="moneyss">
            <p>Money: </p>
            <p id="Money">0</p>
        </div>
    </nav>
        <button class="Chicken_Card">
            <h1>Chicken</h1>
            <img src="pic/chicken_pic.jpg" class="card_pic">
            <div class="Owneds_Card">
                <h3>Owned:</h3>
                <h3>0</h3>
            </div>
            <h3 id="Cost_Sell_1">Cost: </h3>
        </button>
        <button class="Turkey_Card">
            <h1>Turkey</h1>
            <img src="pic/turkey_pic.jpg" class="card_pic">
            <h3>Owned:</h3>
            <h3 id="Cost_Sell_2">Cost: </h3>
        </button>
        <button class="Pig_Card">
            <h1>Pig</h1>
            <img src="pic/pig_pic.jpg" class="card_pic">
            <h3>Owned:</h3>
            <h3 id="Cost_Sell_3">Cost: </h3>
        </button>
        <button class="Sheep_Card">
            <h1>Sheep</h1>
            <img src="pic/sheep_pic.jpg" class="card_pic">
            <h3>Owned:</h3>
            <h3 id="Cost_Sell_4">Cost: </h3>
        </button>
        <button class="Sheep_Card">
            <h1>Goat</h1>
            <img src="" class="card_pic">
            <h3>Owned:</h3>
            <h3 id="Cost_Sell_4">Cost: </h3>
        </button>
        <button class="Sheep_Card">
            <h1>Hourse</h1>
            <img src="" class="card_pic">
            <h3>Owned:</h3>
            <h3 id="Cost_Sell_4">Cost: </h3>
        </button>
        <button class="Sheep_Card">
            <h1>Duck</h1>
            <img src="" class="card_pic">
            <h3>Owned:</h3>
            <h3 id="Cost_Sell_4">Cost: </h3>
        </button>
        <button class="Sheep_Card">
            <h1>Tiger</h1>
            <img src="" class="card_pic">
            <h3>Owned:</h3>
            <h3 id="Cost_Sell_4">Cost: </h3>
        </button>
        <button class="Sheep_Card">
            <h1>Lion</h1>
            <img src="" class="card_pic">
            <h3>Owned:</h3>
            <h3 id="Cost_Sell_4">Cost: </h3>
        </button>`
localStorage.setItem("SavedHTML", saves);
