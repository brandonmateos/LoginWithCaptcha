$(document).ready(function() {
    let account = {
        username: "wada",
        password: "123456789ab"
    };
    let userInput = {
        username: "",
        password: ""
    };
    
    function login() {
        var captchaResponse = grecaptcha.getResponse();
        userInput.username = $("#username").val();
        userInput.password = $("#password").val();
        if (captchaResponse.length != 0 && userValidation(userInput, account)) {
            windowRedirection("./menu.html");
            //Crear localStorage
            localStorage.setItem("username", userInput.username);
        } else {
            windowRedirection("./index.html");
        }
    }

    function userValidation(userInput, account) {
        if (
            userInput.username == account.username &&
            userInput.password == account.password
        ) {
            return true;
        } else {
            return false;
        }
    }

    function windowRedirection(page) {
        window.location.assign(page);
    }

    $("#logoutButton").click(function() {
        localStorage.clear();
        windowRedirection("./index.html");
    });

    $("#loginButton").click(login);
});