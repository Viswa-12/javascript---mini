let fromUserInput = document.getElementById('fromUserInput')
let toUserInput = document.getElementById('toUserInput')
let startBtn = document.getElementById('startBtn')
let counterText = document.getElementById('counterText')
startBtn.onclick = function() {
    if (fromUserInput.value === "" || toUserInput.value === "") {
        alert("values cannot be empty!!!")
    } else if (parseInt(fromUserInput.value) > parseInt(toUserInput.value)) {
        alert("from value cannot be greater than to value.")
    } else {
        let counter = parseInt(fromUserInput.value)
        counterText.textContent = counter
        let id = setInterval(function() {
            counter += 1
            counterText.textContent = counter

            if (counter === parseInt(toUserInput.value)) {
                clearInterval(id)
            }
        }, 1000)
    }
}