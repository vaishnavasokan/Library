function validateReg()
{
    var uid =document.getElementById("userName").value;

    var upwd =document.getElementById("upswd").value;
    var cpwd =document.getElementById("cpswd").value;

    if (uid==null || uid=="" || upwd==null || upwd == "" || cpwd==null  ||  cpwd=="")
    {  
        alert("Please enter the required fields");
        return false;
    }

    if(cpwd!=upwd)
    { 
        alert("Password entered incorrectly, Please Re-enter");
        document.getElementById("upswd").innerHTML="";
        document.getElementById("cpswd").innerHTML="";
        document.getElementById("upswd").focus();
        return false;
    }

    var mailid=document.getElementById("email").value;

    if (mailid == "" || mailid=="")
    { 
            alert("Please enter the required fields");
            return;
            
    }

    var ePattern=/^^[A-Za-z0-9]{1}[\w\.\-]{0,}\@[A-Za-z]{0,8}\.[A-Za-z]{2,3}$/;
    if(!mailid.match(ePattern))
    {
        alert("Invalid email address");
        //document.getElementById("userEmail").innerHTML="Invalid email address";
        document.getElementById("email").focus();     
        return false;
    }
    else
    {
        document.getElementById("userEmail").innerHTML="";
         return true;
    }


}