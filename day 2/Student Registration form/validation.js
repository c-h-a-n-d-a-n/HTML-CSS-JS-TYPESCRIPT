
// First Name Validation
var fullName= document.getElementById("fullName");

var fullNameValidation=function(){

   fullNameValue=fullName.value.trim(); 
   validFullName=/^[a-z]+\s[a-z ]+$/i;
   var fullNameErr=document.getElementById('full-name-err');

   if(fullNameValue=="")
   {
    fullNameErr.innerHTML="Full Name is required";

   }else if(!validFullName.test(fullNameValue)){
     fullNameErr.innerHTML="Full Name must be only string ";
   }else{
     fullNameErr.innerHTML="";
     return true;
    
   }
}

fullName.oninput=function(){
   
   fullNameValidation();
}


 // Email Address Validation
 var emailAddress= document.getElementById("emailAddress");;
 var emailAddressValidation= function(){

  emailAddressValue=emailAddress.value.trim(); 
   validEmailAddress=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
   emailAddressErr=document.getElementById('email-err');

   if(emailAddressValue=="")
   {
    emailAddressErr.innerHTML="Email Address is required";

   }else if(!validEmailAddress.test(emailAddressValue)){
     emailAddressErr.innerHTML="Email Addre must be in valid formate with @ symbol";
   }else{
     emailAddressErr.innerHTML="";
     return true;
   }

 }

emailAddress.oninput=function(){

   emailAddressValidation();
}

 // Mobile Number Validation
 var mobileNumber= document.getElementById("mobileNumber");

 var mobileNumberValidation = function(){

   mobileNumberValue=mobileNumber.value.trim(); 
   validMobileNumber=/^[0-9]*$/;
   mobileNumberErr=document.getElementById('mobile-number-err');

   if(mobileNumberValue=="")
   {
    mobileNumberErr.innerHTML="Mobile Number is required";

   }else if(!validMobileNumber.test(mobileNumberValue)){
     mobileNumberErr.innerHTML="Mobile Number must be a number";
   }else if(mobileNumberValue.length!=10){

      mobileNumberErr.innerHTML="Mobile Number must have 10 digits";
   }
   else{
     mobileNumberErr.innerHTML="";
     return true;
   }

 }
mobileNumber.oninput=function(){

   mobileNumberValidation();
}


// Password Validation
var password= document.getElementById("password");;

var passwordValidation = function(){

  passwordValue=password.value.trim(); 
   validPassword=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
   
   passwordErr=document.getElementById('password-err');

   if(passwordValue=="")
   {
    passwordErr.innerHTML="Password is required";
   }else if(!validPassword.test(passwordValue)){
     passwordErr.innerHTML="Password must have at least one Uppercase, lowercase, digit, special characters & 8 characters";
   }
   else{
     passwordErr.innerHTML="";
     return true;
   }
}

password.oninput=function(){

   passwordValidation();

 confirmPasswordValidation();
   
}

// Confirm Password Validation
var confirmPassword= document.getElementById("confirmPassword");;

var confirmPasswordValidation=function(){
   confirmPasswordValue=confirmPassword.value.trim(); 
   
   confirmPasswordErr=document.getElementById('confirm-password-err');
   if(confirmPasswordValue==""){
       confirmPasswordErr.innerHTML="Confirm Password is required";
   }

  else if(confirmPasswordValue!=password.value){
     confirmPasswordErr.innerHTML="Confirm Password does not match";
   }
   else{
     confirmPasswordErr.innerHTML="";
     return true;
   }
}

confirmPassword.oninput=function(){

 confirmPasswordValidation();
   
}

// validation on submit


document.getElementById("registrationForm").onsubmit=function(e){

  
  fullNameValidation();
  emailAddressValidation();
  mobileNumberValidation();
  passwordValidation();
  confirmPasswordValidation();

  if(fullNameValidation()==true && 
    emailAddressValidation() == true && 
    mobileNumberValidation()==true && 
    passwordValidation()==true && 
    confirmPasswordValidation()==true){
       var display=document.getElementsByClassName("display")
       display.innerHTML="Data Submited"
    return true;
  }else{
    var display=document.getElementsByClassName("display")
       display.innerHTML="Data Not Submited"
    return false;
  }
}
