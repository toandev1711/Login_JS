
// 1 truy cap vao phan tu
const username = document.querySelector('#username')
const password = document.querySelector('#password')
const loginBtn = document.querySelector('.login-button')
const registerBtn = document.querySelector('#registerBtn')

async function handleOnclick () {
    let usernameValue = username.value
    let passwordValue = password.value

    if(usernameValue && passwordValue) 
    {
        login(usernameValue, passwordValue)
    }
    
}
async function login(username, password){
    url = `http://localhost:3000/users?username=${username}&password=${password}`
    try {

        // goi api
        let response = await fetch(url);
        let data = await response.json()
        
        // kiem tra user co ton tai
        if(data.length > 0)
        {
            // luu id cua user vao LocalStorage
            localStorage.setItem('ID', data[0].id)

            // goi ham getPost
            await getPost(data[0].id)
            window.location.href = '../page/home.html'
        }
        else window.alert("Sai thong tin")
    } catch (error) {
        console.log(error)
    }
}
// viet ham goi API lay post cua user
async function getPost(authorID) {
    url = `http://localhost:3000/posts?authorID=${authorID}`
    try {
        let response = await fetch(url)
        let data = await response.json()
        console.log(data)
        localStorage.setItem('Posts', JSON.stringify(data))
    } catch (error) {
        
    }
}

// 2 lang nghe su kien
loginBtn.addEventListener('click', handleOnclick)
registerBtn.addEventListener('click', ()=>{
    window.location.href = '../page/register.html'
})

