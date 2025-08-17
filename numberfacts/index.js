let userInput = document.getElementById('userInput')
let fact = document.getElementById('fact')
let spinner = document.getElementById('spinner')

function getResult(event) {
    if (event.key === 'Enter') {
        let value = userInput.value
        if (value === "") {
            alert("enter a number!!")
        } else {
            spinner.classList.toggle('d-none')
            let options = {
                method: "GET"
            }
            let url = 'https://apis.ccbp.in/numbers-fact?number=' + value
            fetch(url, options)
                .then(function(response) {
                    return response.json()
                })
                .then(function(result) {
                    spinner.classList.toggle('d-none')
                    // console.log(result)
                    fact.textContent = result.fact
                })

        }
    }
}

userInput.addEventListener('keydown', getResult)