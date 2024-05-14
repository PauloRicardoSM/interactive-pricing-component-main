const slider = document.getElementById('mySlider');
const moneySpan = document.getElementById('money');

slider.oninput = function() {
    moneySpan.textContent = this.value;
}