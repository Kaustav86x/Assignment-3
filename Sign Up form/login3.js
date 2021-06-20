
function MyFunc1() {
var fname = document.getElementById('fname').value;
var lname = document.getElementById('lname').value;
var mail = document.getElementById('mail').value;
var pass1 = document.getElementById('pass1').value;
var pass2 = document.getElementById('pass2').value;
    if (fname.length == 0 || lname.length == 0 || mail.length == 0 || pass1.length == 0 || pass2.length == 0) {
        alert("Please insert every documnet !!");
        location.reload();
    }
    else {
        if (pass1 == pass2) {
            var res = "Your name is " + fname + " " + lname + " and email is " + mail;
            alert(res);
            }
        else {
            alert("Password does not match !! Try again ");
        }
        // location.replace("login.html"); // redirecting to the sign in page
    }
}
function MyFunc2() {
    alert("The form has been cancelled !!");
    location.reload();
}