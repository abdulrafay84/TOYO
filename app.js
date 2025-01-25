 // About us js
 function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read More"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read Less"; 
      moreText.style.display = "inline";
    }
  }
  // About us js


  



// CONTACT US 

function abc()
{
var Fname =document.getElementById('Fname').value;
var Lname =document.getElementById('Lname').value;
var Email =document.getElementById('Email').value;
// var Phone =document.getElementById('Password').value;

var fnameError = document.getElementById('fnameError');
var lnameError = document.getElementById('lnameError');
var emailError = document.getElementById('emailError');
// var phoneError = document.getElementById('phoneError');

fnameError.innerHTML;
lnameError.innerHTML;
emailError.innerHTML;
// phoneError.innerHTML;


if(Fname =="")
    {
        fnameError.innerHTML ="First Name is Required☑✔✔";
        return false;
    }

    if(Lname =="")
        {
            lnameError.innerHTML ="last Name is Required☑✔✔";
            return false;
        }

        if(Email =="")
            {
                emailError.innerHTML ="Email is Required☑✔✔";
                return false;
            }

};


// CONTACT US 

