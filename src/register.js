document.addEventListener("DOMContentLoaded", function () {
    let registerForm = document.getElementById("registerForm");
    let registerUsername = document.getElementById("registerUsername");
    let registerPassword = document.getElementById("registerPassword");

    async function handOnRegister(event) {
        event.preventDefault();
        console.log("Form submitted, but page should not reload."); 
        let inputUsername = registerUsername.value;
        let inputPassword = registerPassword.value;
        let url = "http://localhost:3000/users";
        if(inputUsername && inputPassword){

            try {
                const response = await fetch(url, {
                    method: "POST",
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        username: inputUsername,
                        password: inputPassword
                    })
                });
    
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
    
                const data = await response.json();
                console.log("Server Response:", data);
                window.location.href = '../page/login.html'
    
            } catch (error) {
                console.error("Error:", error);
            }
        }
    }

    registerForm.addEventListener("submit", handOnRegister);
});
