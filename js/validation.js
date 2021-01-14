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
    var lname = document.registration.lname;
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

  $(document).ready(function(){
    $("#tableSearch").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#myTable tr").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });