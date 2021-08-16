// get input value
function inputValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputFieldValue = inputField.value;
    return inputFieldValue;
}
// add event handler to the login button
document.getElementById('login-btn').addEventListener('click', function(){
    // get username and password
    const userEmail = inputValue('email-field');
    const userPassword = inputValue('password-field');
    // give access to login if info is correct
    if(userEmail == 'myShop@info.com' && userPassword == '1234'){
        window.location.href = 'myShop.html'
    }
})