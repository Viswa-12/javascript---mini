let timer = document.getElementById('timer')
let quoteDisplay = document.getElementById('quoteDisplay')
let quoteInput = document.getElementById('quoteInput')
let submitBtn = document.getElementById('submitBtn')
let resetBtn = document.getElementById('resetBtn')
let result = document.getElementById('result')
let spinner = document.getElementById('spinner')
let contentDisplay = document.getElementById('contentDisplay')

counter = 0
let timerId = setInterval(function() {
    counter = counter + 1
    timer.textContent = counter
}, 1000)

function getQuote() {
    let options = {
        method: "GET"
    }
    let url = 'https://apis.ccbp.in/random-quote'
    fetch(url, options)
        .then(function(response) {
            // console.log(response.status)
            return response.json()
        })
        .then(function(result) {
            spinner.classList.add('d-none')
            contentDisplay.classList.remove('d-none')
            console.log(result.content)
            quoteDisplay.textContent = result.content
        })
}
getQuote()

submitBtn.addEventListener('click', function() {
    let text = quoteInput.value
    if (text === quoteDisplay.textContent) {
        let stopTime = counter
        clearInterval(timerId)
        timer.textContent = 0
        counter = 0
        result.textContent = 'You typed in ' + stopTime + ' seconds'
    } else {
        result.textContent = 'You typed incorrect sentence'
    }
})

resetBtn.addEventListener('click', function() {
    spinner.classList.remove('d-none')
    contentDisplay.classList.add('d-none')
    clearInterval(timerId)
    counter = 0
    timer.textContent = counter
    timerId = setInterval(function() {
        counter = counter + 1
        timer.textContent = counter
    }, 1000)
quoteInput.value=""
    getQuote()
})