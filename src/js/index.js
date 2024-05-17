//Do theslider change span tag text#money
const slider = document.getElementById('mySlider')
const moneySpan = document.getElementById('money')
const sliderValue = document.getElementById('sliderValue')
const values = ['10k', '50k', '100k', '500k', '1M']
const prices = ['8', '12', '16', '24', '36']

function updatePrice() {
    let check = document.getElementById('chk')
    let discount = prices[slider.value] * (25/100)
    if(check.checked) {
        moneySpan.textContent = `$${prices[slider.value] - discount}.00`
    } else {
        moneySpan.textContent = `$${prices[slider.value]}.00`
    }
}

slider.addEventListener('input', function(){
    //Changes the text of the span#money    
    sliderValue.textContent = `${values[this.value]} Pageviews`
    updatePrice()
    //Changes the background color of the slider
    this.style.background = `linear-gradient(to right, hsl(174, 77%, 80%) ${(this.value * 25)}%, hsl(224, 65%, 95%) ${(this.value * 25)}%)`
})

//Aply 25% of discount in the price
function discount() {
    updatePrice()
}