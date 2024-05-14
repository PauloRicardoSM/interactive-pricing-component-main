//Do theslider change span tag text#money
const slider = document.getElementById('mySlider');
const moneySpan = document.getElementById('money');

slider.oninput = function() {
    //Changes the text of thespan#money
    moneySpan.textContent = this.value;
    
    //Changes the background color of the slider
    this.style.background = `linear-gradient(to right, hsl(174, 77%, 80%) ${this.value}%, hsl(224, 65%, 95%) ${this.value}%)`
}
