const registerUsername = document.querySelector('#registerUsername')
const registerPassword = document.querySelector('#registerPassword')
const registerSubmit = document.querySelector('#registerSubmit')

//
function handOnRegister (){
    let inputUsername = registerUsername.value
    let inputPassword = registerPassword.value
    
    let url = 'http://localhost:3000/users'
    fetch(url, {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: inputUsername,
            password: inputPassword
        })
    })
}
registerSubmit.addEventListener('click', handOnRegister)