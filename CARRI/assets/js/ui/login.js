import helper from'../custom.js'

const loginButton = document.getElementById("loginButton")


loginButton.onclick = function (){
   
    let emailField =  document.getElementById("enteremail")
    let passwordField = document.getElementById("enterpassword")

   console.log("email :" + emailField.value)
       helper.login(emailField.value , passwordField.value)
}