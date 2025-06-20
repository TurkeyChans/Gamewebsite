window.onload = openPopup;

function openPopup() {
    document.getElementById('popup').classList.add('show');
}
function closePopup() {
    document.getElementById('popup').classList.remove('show');
}
function sell() {
    for(let i = 1; i <= 4; ++i) {
        document.getElementById(`Cost_Sell_${i}`).innerHTML = "Sell: ";
    }
}
function buy() {
    for(let i = 1; i <= 4; ++i) {
        document.getElementById(`Cost_Sell_${i}`).innerHTML = "Cost: ";
    }
}
