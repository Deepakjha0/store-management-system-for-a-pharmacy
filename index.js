document.addEventListener("DOMContentLoaded",function(){
    const loginForm = document.getElementById("loginPage");
    loginForm.addEventListener("submit",function(e){
        e.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        if(username === password){
            alert("Login Successful");
            window.location.href = "orders.html"
        }
        else{
            alert("Please enter valid credentials!")
        }
    });
});