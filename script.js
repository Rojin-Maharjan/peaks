const fname = document.getElementById("name");
const subj = document.getElementById("sub");
const email = document.getElementById("email");
const message = document.getElementById("message");
const form = document.getElementById("contact");

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

    var email_check = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if(fname.value === '' || fname.value == null){
        e.preventDefault();
        errorMsg(fname, "<sup>*</sup>Full Name required")
    }
    else{
        success(fname);
    }
    if(!email.value.match(email_check)){
        e.preventDefault();
        errorMsg(email, "<sup>*</sup>Invalid email")
    }
    else{
        success(email);
    }
    if(subj.value === '' || subj.value == null){
        e.preventDefault();
        errorMsg(subj, "<sup>*</sup>Subject required");
    }
    else{
        success(subj);
    }
    if(message.value === '' || message.value == null){
        e.preventDefault();
        errorMsg(message, "<sup>*</sup>Message required");
    }
    else{
        success(message);
    }
});

console.log(message);