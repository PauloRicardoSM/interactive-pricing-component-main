//Do theslider change span tag text#money
const slider = document.getElementById('mySlider')
const moneySpan = document.getElementById('money')
const sliderValue = document.getElementById('sliderValue')
const values = ['10k', '50k', '100k', '500k', '1M']
const prices = ['8', '12', '16', '24', '36']

//Changes the text of thespan#money    
slider.addEventListener('input', function(){
    sliderValue.textContent = `${values[this.value]} Pageviews`
    moneySpan.textContent = `$${prices[this.value]}.00`

})

slider.oninput = function() {
    //Changes the background color of the slider
    this.style.background = `linear-gradient(to right, hsl(174, 77%, 80%) ${(this.value * 25)}%, hsl(224, 65%, 95%) ${(this.value * 25)}%)`
}

