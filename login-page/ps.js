let username = document.getElementById("username");
let password = document.getElementById("password");
let flag = 1;
function validation() {
    if (username.value == "") {
        document.getElementById("user_error").innerHTML = "username is empty";
        flag = 0;
    }
    else if(username.value.length < 3){
        document.getElementById("user_error").innerHTML = "username must be greater then 3";
        flag = 0;
    }
    else{
        document.getElementById("user_error").innerHTML = "";
        flag = 1;
    }
    
    if (password.value == "") {
        document.getElementById("password_error").innerHTML = "password is empty";
        flag = 0;
    }
    else{
        document.getElementById("password_error").innerHTML = "";
        
    }

    if(flag){
        return true;
    }
    else{
        return false;
    }
}

