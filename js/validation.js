
function formValidation()
{
   
    var ustate = document.registration.state; 

    if(stateselect(ustate))
    {
        return true 
    }

    return false;
} 

function title_validation(title)
{   
    var title = document.registration.title;
    return true;
}

function fname_validation(fname)
{
    var fname = document.registration.fname;
    var letters = /^[A-Za-z]+$/;
    if(fname.value.match(letters))
    {
        return true;
    }
    else
    {
        alert('First Name must have alphabet characters only');
        fname.focus();
        return false;
    }
}
function allLetter(lname)
{ 
    var lname = document.registration.username;
    var letters = /^[A-Za-z]+$/;
    if(lname.value.match(letters))
    {
        return true;
    }
    else
    {
        alert('Last Name must have alphabet characters only');
        lname.focus();
        return false;
    }
}

function ValidateEmail(uemail)
{
    var uemail = document.registration.email;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(uemail.value.match(mailformat))
    {
        return true;
    }
    else
    {
        alert("You have entered an invalid email address!");
        uemail.focus();
        return false;
    }
}

function ValidatePhone(phone)
{ 
    var phone = document.registration.phone;
    var numbers = /^[0-9]+$/;
    if(phone.value.match(numbers))
    {
        return true;
    }
    else
    {
        alert('Phone number must have numeric characters only');
        phone.focus();
        return false;
    }
}

function alphanumeric(uadd)
{ 
    var uadd = document.registration.address;
    return true;
}

function stateselect(ustate)
{
    if(ustate.value == "Default")
    {
        alert('Select your state from the list');
        ustate.focus();
        return false;
    }
    else
    {
        return true;
    }
}
function allnumeric(uzip)
{ 
    var uzip = document.registration.zip;
    var numbers = /^[0-9]+$/;
    if(uzip.value.match(numbers))
    {
        return true;
    }
    else
    {
        alert('ZIP code must have numeric characters only');
        uzip.focus();
        return false;
    }
}