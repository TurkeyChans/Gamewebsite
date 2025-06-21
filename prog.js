window.onload = openPopup;
let price = [100,200,300,400]
let market = [150, 300, 500, 700]
function openPopup() {
    document.getElementById('popup').classList.add('show');
}
function closePopup() {
    document.getElementById('popup').classList.remove('show');
}
function sell() {
    for(let i = 1; i <= 4; ++i) {
        document.getElementById(`Cost_Sell_${i}`).innerHTML = `Sell: ${market[i-1]}`;
    }
}
function buy() {
    for(let i = 1; i <= 4; ++i) {
        document.getElementById(`Cost_Sell_${i}`).innerHTML = `Cost: ${price[i-1]}`;
    }
}
