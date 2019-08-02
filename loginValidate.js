function validateLogin()
{
    var un =document.getElementById("uname").value;
    var pwd =document.getElementById("pswd").value;
    if(un == "" && pwd=="")
    {
        alert("Please enter valid credentials");
       
    }
    
}