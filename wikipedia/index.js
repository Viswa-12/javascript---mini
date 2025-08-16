let spinner = document.getElementById('spinner')
let searchResults = document.getElementById('searchResults')
let searchInput = document.getElementById('searchInput')

function createAndAppendresult(item) {
    let {
        title,
        link,
        description
    } = item
    let containerElement = document.createElement('div')
    containerElement.classList.add('result-item')
    searchResults.appendChild(containerElement)

    let titleEle = document.createElement('a')
    titleEle.textContent = title
    titleEle.href = link
    titleEle.target = '_blank'
    titleEle.classList.add('result-title')
    containerElement.appendChild(titleEle)

    let breakEle = document.createElement('br')
    containerElement.appendChild(breakEle)


    let linkEle = document.createElement('a')
    linkEle.textContent = link
    linkEle.href = link
    linkEle.classList.add('result-url')
    linkEle.target = '_blank'
    containerElement.appendChild(linkEle)

    let breakEle1 = document.createElement('br')
    containerElement.appendChild(breakEle1)


    let descriptionEle = document.createElement('p')
    descriptionEle.textContent = description
    descriptionEle.classList.add('link-description')
    containerElement.appendChild(descriptionEle)

}

function createAndAppendresults(searchResults) {
    spinner.classList.toggle('d-none')
    for (let item of searchResults) {
        createAndAppendresult(item)
    }
}

function getInput(event) {
    if (event.key === 'Enter') {
        spinner.classList.toggle('d-none')
        let options = {
            method: "GET"
        }
        let value = searchInput.value
        let url = 'https://apis.ccbp.in/wiki-search?search=' + value
        fetch(url, options)
            .then(function(response) {
                // console.log(response.status)
                return response.json()
            })
            .then(function(result) {
                console.log(result)
                // let search_results={result}
                createAndAppendresults(result.search_results)
            })
    }
}
searchInput.addEventListener('keydown', getInput)