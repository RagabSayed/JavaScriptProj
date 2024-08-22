let firstName = document.querySelector("#first_name");
let lastName = document.querySelector("#last_name");
let email = document.querySelector("#email");
let password = document.querySelector("#pwd");
let registerBtn = document.querySelector("#register");

registerBtn.addEventListener("click", function (e) {
    e.preventDefault();
    if (firstName.value === "" || lastName.value === "" || email.value === "" || password.value === "") {
        alert("Please fill data")
    } else {
        localStorage.setItem("fristName", firstName.value);
        localStorage.setItem("lastName", lastName.value);
        localStorage.setItem("email", email.value);
        localStorage.setItem("password", password.value);
        setTimeout(()=>{
            window.location = "login.html";
        }, 1000);

    }
})
