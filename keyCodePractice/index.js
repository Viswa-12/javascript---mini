let userInput = document.getElementById('userInput')
let keyCodeList = document.getElementById('keyCodeList')
userInput.onkeydown = function(e) {
    let value = e.keyCode
    let li = document.createElement('li')
    li.textContent = value
    keyCodeList.appendChild(li)
}