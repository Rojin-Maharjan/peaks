const fname = document.getElementById("name");
const address = document.getElementById("address");
const email = document.getElementById("email");
const message = document.getElementById("message");
const form = document.getElementById("contact");

const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");

var email_check = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;


menuBtn.addEventListener('click', function(){
    const nav = document.querySelector('.nav');
    nav.style.display = 'flex';
});

closeBtn.addEventListener('click', function(){
    const nav = document.querySelector('.nav');
    nav.style.display = 'none';
});
// error function
function errorMsg(input, msg){
    const input_box = input.parentElement;
    input_box.className = "input-box error";
    const error_txt = input_box.querySelector("span");
    error_txt.innerHTML  = msg;
}
function success(input){
    const input_box = input.parentElement;
    input_box.className = "input-box";
    const error_txt = input_box.querySelector("span");
    error_txt.innerHTML  = "";
}
// event listener 
form.addEventListener('submit', function(e){
    if(fname.value === '' || fname.value == null){
        e.preventDefault();
        errorMsg(fname, "<sup>*</sup>Full Name required")
    }
    else{
        success(fname);
    }
    if(email.value === '' || email.value == null){
        e.preventDefault();
        errorMsg(email, "<sup>*</sup>Email required");
    }
    else{
        if(!email.value.match(email_check)){
            e.preventDefault();
            errorMsg(email, "<sup>*</sup>Invalid email")
        }
        else{
            success(email);
        }
    }
    if(address.value === '' || address.value == null){
        e.preventDefault();
        errorMsg(address, "<sup>*</sup>Address required");
    }
    else{
        success(address);
    }
    if(message.value === '' || message.value == null){
        e.preventDefault();
        errorMsg(message, "<sup>*</sup>Message required");
    }
    else{
        success(message);
    }

});
email.addEventListener("keyup", function emailValidation(e){
if(!email.value.match(email_check)){
    e.preventDefault();
    errorMsg(email, "<sup>*</sup>Invalid email")
}
else{
    success(email);
}
});