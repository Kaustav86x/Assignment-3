function MyFunc1() {
    var name = document.getElementById("name").value;    //important
    var mail = document.getElementById("email").value;  //important
    if (( name.length == 0 && mail.length == 0) || ( name.length == 0 || mail.length == 0)) {
        alert("Input the values first !!");
    }
    else {
        var res = "Your name is "+name+" and email is "+mail;
        alert(res);
    }
    // location.reload(); // reload the current page
}
function MyFunc2() {
    alert("The form has been cancelled !!");
    location.reload();
}