let searchInput = document.getElementById('searchInput')
let resultsHeading = document.getElementById('resultsHeading')
let spinner = document.getElementById('spinner')
let searchResults = document.getElementById('searchResults')

function createAndAppendBook(book) {
    let {
        author,
        imageLink
    } = book
    let bookContainer = document.createElement('div')
    bookContainer.classList.add('col-5', 'col-md-3', 'col-lg-2', 'mr-2', 'mb-2')
    searchResults.appendChild(bookContainer)

    let bookImage = document.createElement('img')
    bookImage.src = imageLink
    bookImage.classList.add('resultBookImage')
    bookContainer.appendChild(bookImage)

    let bookTitle = document.createElement('h1')
    bookTitle.textContent = author
    bookTitle.classList.add('bookTitle')
    bookContainer.appendChild(bookTitle)

}

function createAndAppendBooks(totalBooks) {
    resultsHeading.classList.remove('d-none')
    resultsHeading.textContent = 'Popular Books'
    searchResults.textContent = ''
    for (let book of totalBooks) {
        createAndAppendBook(book)
    }
}



searchInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        if (event.target.value !== '') {
            spinner.classList.remove('d-none')
            // makeRequest()
            let options = {
                method: "GET"
            }
            let url = 'https://apis.ccbp.in/book-store?title=' + searchInput.value
            fetch(url, options)
                .then(function(response) {
                    return response.json()
                })
                .then(function(result) {
                    spinner.classList.add('d-none')
                    if (result.search_results.length === 0) {
                        searchResults.textContent = ''
                        resultsHeading.classList.remove('d-none')
                        resultsHeading.textContent = 'No Results Found'
                    } else {
                        totalBooks = result.search_results
                        // console.log(totalBooks)
                        createAndAppendBooks(totalBooks)
                    }
                })
        }
    }
})