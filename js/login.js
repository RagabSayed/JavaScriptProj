let email = document.querySelector("#email");
let password = document.querySelector("#pwd");
let loginBtn = document.querySelector("#log_in");
let getEmail = localStorage.getItem("email");
let getPassword = localStorage.getItem("password");

loginBtn.addEventListener("click", function (e) {
    e.preventDefault();
    if (email.value === "" || password.value === "") {
        alert("Please fill data");
    } else {
        if (getEmail.trim() === email.value.trim() && getPassword.trim() === password.value.trim()) {
            setTimeout(()=>{
                window.location = "index.html";
            }, 1000)
        } else {
            alert("Email or Password is wrong")
        }
    }
})

