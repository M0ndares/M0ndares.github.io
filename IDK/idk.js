var password = document.getElementById('password');
var username = document.getElementById('username');
var labelForPassword = document.getElementById('labelForPassword');
var labelForUsername = document.getElementById('labelForUsername');
var hiddenButton = document.getElementById('hiddenButton');
var currentUsers = [];
var currentPasswords = [];
var isPasswordValid = false;
var isUsernameValid = false;
var indexOfUser = 0;

function isUserValid() {
    var passwordToString = password.value.trim();
    var usernameToString = username.value.trim();
    if (passwordToString.length > 7) {
        labelForPassword.innerText = "The password is valid";
        isPasswordValid = true;
    } else {
        labelForPassword.innerText = "The password is not valid, it needs to be at least 8 characters long";
    }
    if (usernameToString.length < 4) {
        labelForUsername.innerText = "The username is not valid, it needs to be at least 4 characters long"
    } else if (!currentUsers.includes(usernameToString)) {
        labelForUsername.innerText = "The username is valid";
        currentUsers.push(usernameToString);
        isUsernameValid = true;     
    } else {
        labelForUsername.innerText = "The username is already taken";
    }
    if (isPasswordValid && isUsernameValid) {
        labelForPassword.innerText = "Your new password is" + passwordToString;
        labelForUsername.innerText = "Your new username is" + usernameToString;
        currentPasswords.push(i+passwordToString);
        currentUsers.push(i+usernameToString);
        hiddenButton.style.display = 'block';
        i++;
    }
}