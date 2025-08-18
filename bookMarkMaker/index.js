// Example Valid URLs: https://learning.ccbp.in/, https://www.google.com/
let siteNameInput = document.getElementById('siteNameInput')
let siteUrlInput = document.getElementById('siteUrlInput')
let submitBtn = document.getElementById('submitBtn')
let bookmarksList = document.getElementById('bookmarksList')
let siteNameErrMsg = document.getElementById('siteNameErrMsg')
let siteUrlErrMsg = document.getElementById('siteUrlErrMsg')
let bookmarkForm = document.getElementById('bookmarkForm')

siteNameInput.addEventListener('change', function(event) {
    if (event.target.value === '') {
        siteNameErrMsg.textContent = 'Required*'
    } else {
        siteNameErrMsg.textContent = ''
    }
})

siteUrlInput.addEventListener('change', function(event) {
    if (event.target.value === '') {
        siteUrlErrMsg.textContent = 'Required*'
    } else {
        siteUrlErrMsg.textContent = ''

    }
})

function createBookMark(name, url) {
    let bookmarkList = document.createElement('li')
    bookmarkList.classList.add('bookmarklist')
    bookmarksList.appendChild(bookmarkList)

    let nameElement = document.createElement('p')
    nameElement.textContent = name
    bookmarkList.appendChild(nameElement)

    let urlElement = document.createElement('a')
    urlElement.href = url
    urlElement.textContent = url
    urlElement.setAttribute('target', '_blank');
    bookmarkList.appendChild(urlElement)
    siteNameInput.value=""
    siteUrlInput.value=""
}

bookmarkForm.addEventListener('submit', function(event) {
    event.preventDefault()
    let name = siteNameInput.value
    let url = siteUrlInput.value
    if (name === '') {
        siteNameErrMsg.textContent = 'Required*'
    }
    if (url === '') {
        siteUrlErrMsg.textContent = 'Required*'
    }
    if (name !== '' && url !== '') {
        createBookMark(name, url)
    }
})