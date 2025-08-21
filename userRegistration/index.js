let addUserForm = document.getElementById('addUserForm')
let name = document.getElementById('name')
let email = document.getElementById('email')
let nameErrMsg = document.getElementById('nameErrMsg')
let emailErrMsg = document.getElementById('emailErrMsg')
let status = document.getElementById('status')
let genderMale = document.getElementById('genderMale')
let genderFemale = document.getElementById('genderFemale')
let successMsg=document.getElementById('successMsg')
let formData = {
    name: "",
    email: "",
    gender: "Male",
    status: "Active"
}

name.addEventListener('blur', function(event) {
    if (event.target.value === '') {
        nameErrMsg.textContent = 'Required*'
    } else {
        nameErrMsg.textContent = ''
        formData.name = event.target.value
    }
})

status.addEventListener('change', function(event) {
    formData['status'] = event.target.value
})

genderMale.addEventListener('change', function(event) {
    formData.gender = event.target.value
})
genderFemale.addEventListener('change', function(event) {
    formData.gender = event.target.value
})

email.addEventListener('blur', function(event) {
    if (event.target.value === '') {
        emailErrMsg.textContent = 'Required*'
    } else {
        emailErrMsg.textContent = ''
        formData.email = event.target.value
    }
})

function validateFormData() {
    if (name.value === '') {
        nameErrMsg.textContent = 'Required*'
    }
    if (email.value === '') {
        emailErrMsg.textContent = 'Required*'
    }
}

function submitFormData() {
    let options = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            // Accept: 'application/json',
            Authorization: 'Bearer e26f7f4f7bc9c05e13bdbefcfae2f4af588611a8b4b5213a3433cd08e60eb083'
        },
        body: JSON.stringify(formData)
    }
    let url = 'https://gorest.co.in/public-api/users'
    fetch(url, options)
        .then(function(response) {
            return response.json()
        })
        .then(function(result) {
            console.log(result)
            if (result.code === 422) {
                if (result.data[0].message === 'has already been taken') {
                    emailErrMsg.textContent = 'Email has already been taken'
                }
            }
            else{
                name.value=""
                email.value=""
                successMsg.textContent="User registration Successful!"
            }
        })
}

addUserForm.addEventListener('submit', function(event) {
    event.preventDefault()
    validateFormData()
    submitFormData()
})