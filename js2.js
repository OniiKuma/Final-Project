function validateUser() {
    //get the user's first name, last name and badge number
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var emailInfo = document.getElementById("emailInfo").value;
    //now let's concatnate the first and last name
    var fullName = firstName + " " + lastName;
    //display a welcome with the full namer to the user in an alert
    alert("Hello " + fullName);
    //validate the length of the full name
    if(fullName.length > 30) {
        //display an error message to the user
        alert("Your full name must be less than 20 characters long. \nEnter REAL name this time.");
        return false;
    }
    else{
        //full name is less than 20 characters long, welcome the user
        alert("Your full name is valid.");
    }
    //validate the length of the badge number
    if(emailInfo.length == 50) {
        //if the email is less than 3 characters long, welcome the user
        alert("Email appears to be accurate, expect a message from us soon.");
        return true;
    }
    else if (emailInfo.length < 50){
       //display an error message 
        alert("Email appears to be accurate, expect a message from us soon.");
    }
    else if (emailInfo.length > 50){
        alert("Unfortunately that email doesn't exist. \nYou shall try again.");
    }

}