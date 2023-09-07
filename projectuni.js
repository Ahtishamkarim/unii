function login(){
    var UserName=document.getElementById("UserName").value;
    var password=document.getElementById("password").value;

    var UserNameerror= document.getElementById("UserNameerror");
    var passworderror= document.getElementById("passworderror");
 
    var validate=true;
    if (UserName.trim()==="") {
        UserNameerror.innerHTML ='User Name is required';
        validate=false;
    }
     if (password.trim()==="") {
        passworderror.innerHTML ='password is required';
        validate=false;
    }

    if (validate) {
        window.location.href = "downloading.html";
    } else {
        document.getElementById("UserName").value = '';
        document.getElementById("password").value = '';
    } 

    return validate;
}

function signup(){
    // sing up page
    var FirstName=document.getElementById("FirstName").value;
    var lastName=document.getElementById("lastName").value;
    var createPassword=document.getElementById("createPassword").value;
    var reenterpassword=document.getElementById("reenterpassword").value;

    var FirstNameerror= document.getElementById("FirstNameerror");
    var lastNameerror= document.getElementById("lastNameerror");
    var createPassworderror=document.getElementById("createPassworderror");
    var reenterpassworderror=document.getElementById("reenterpassworderror");
    

    var validate=true;

    if (FirstName.trim()==="") {
        FirstNameerror.innerHTML ='First Name is required';
        validate=false;
    } 
    if (lastName.trim()==="") {
        lastNameerror.innerHTML ='last Name is required';
        validate=false;
    }
    if (createPassword.trim()==="") {
        createPassworderror.innerHTML ='create a new password required';
        validate=false;
    } 

    if (reenterpassword.trim() === "") {
        reenterpassworderror.innerHTML = 'Enter password again';
        validate = false;
    } else if (reenterpassword !== createPassword) {
        reenterpassworderror.innerHTML = 'Passwords do not match';
        validate = false;
    }

    if (validate) {
        window.location.href = "downloading.html";
    }  else {
        document.getElementById("FirstName").value = '';
        document.getElementById("lastName").value = '';
        document.getElementById("createPassword").value = '';
        document.getElementById("reenterpassword").value = '';
        
    }

    return validate;

}

function forget(){
    var forgetpassword=document.getElementById("forgetpassword").value;

    var forgetpassworderror=document.getElementById("forgetpassworderror");

    var msgsend=document.getElementById("msgsend")

    var validate=true;
    if (forgetpassword==""){
        forgetpassworderror.innerHTML="Email is Required";
        validate=false
        
    } else {
        msgsend.innerHTML="Message Send Successfully"
    }
    return validate
}


function downloadImage(imageUrl) {
    var link = document.createElement('a');
    link.href = imageUrl
    link.download = "Image.png"
    link.click();
}