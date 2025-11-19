console.log("JS file is working!");

let form = document.querySelector("form");


form.addEventListener("submit", function (event) {
    event.preventDefault(); 

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "" || password === "") {
        alert("Please enter username and password");
    } else {
        alert("Login Successful!");
    }
});
