let hoursInput = document.getElementById('hoursInput')
let minutesInput = document.getElementById('minutesInput')
let convertBtn = document.getElementById('convertBtn')
let timeInSeconds = document.getElementById('timeInSeconds')
let errorMsg = document.getElementById('errorMsg')

convertBtn.addEventListener('click', function() {
    if (hoursInput.value === "") {
        timeInSeconds.textContent = ""
        timeInSeconds.classList.remove('convertedSeconds')
        errorMsg.textContent = "Please enter a valid number of hours."

    } else if (minutesInput.value === "") {
        errorMsg.textContent = "Please enter a valid number of Minutes."
        timeInSeconds.textContent = ""
        timeInSeconds.classList.remove('convertedSeconds')

    } else {
        let hours = parseInt(hoursInput.value)
        let Minutes = parseInt(minutesInput.value)
        let result = (hours * 3600) + (Minutes * 60)
        timeInSeconds.textContent = result + " s"
        timeInSeconds.classList.add('convertedSeconds')
        errorMsg.textContent = ""
    }
})