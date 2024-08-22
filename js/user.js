
let userInfo = document.querySelector("#user_info");
let showAfterLogin = document.querySelector("#show_after_login");
let showBeforLogin = document.querySelector("#show_befor_login");
if (localStorage.getItem("fristName")) {
    showBeforLogin.style.display = "none";
    showAfterLogin.style.display = "flex";
    userInfo.innerHTML = "welcom " + localStorage.getItem("fristName");
} 
// //////////////////////////
let logout = document.querySelector("#logout");
logout.addEventListener("click", function (e) {
    showAfterLogin.style.display = "none";
    showBeforLogin.style.display = "flex";
    localStorage.clear();
    setTimeout(()=>{
        window.location = "index.html";
        }, 1000)
})


