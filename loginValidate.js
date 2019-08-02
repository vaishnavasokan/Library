function loginValidate()
{
    var un =document.getElementById("uname").value;
    var pwd =document.getElementById("pswd").value;
    //console.log(un);
    //console.log(pwd);

    if (un==null || pwd=="" ||  pwd==null || un=="")
    {  
        alert("Please enter valid credentials");
        document.getElementById("uname").focus;
        //console.log("Please enter valid credentials");
        //document.getElementById("alert1").style.display="auto";
        //return false;
    }
    
}