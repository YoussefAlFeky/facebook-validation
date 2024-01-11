function validateForm() {
    var email = document.getElementById("email").value;
    var error = document.getElementById("error");
    var text = "";

    if (email.indexOf("@") == -1 || email.length < 10) {
        text = "Please enter a valid email";
        error.innerHTML = text;
        return false;
    } else {
        alert("Done");
        return true;
    }
}