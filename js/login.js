$(document).ready(function () {
    //event handler for submit button
    $("#btnLogin").click(function () {
        //collect userName and password entered by users
        var userName = $("#uname").val();
        var password = $("#psw").val();

        //call the authenticate function
        authenticate(userName, password);
    });
});



var checkval = false;

function authenticate(userName, password) {
    var name;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {       
        var $json=$.parseJSON(this.responseText);

        $.each($json,function(i,obj)
        {
            if(obj.loginName == userName && obj.password == password)
            {
                checkval = true;
                name = obj.firstName;
                return false;
            }
        });

        if(checkval == true)
                {
                    myFunction(name)
                }
            else
                {
                    alert("!!!!!-----Incorrect login Details-----!!!!!");
                }
    
    }
    };
    xmlhttp.open("GET", "../login.json", true);
    xmlhttp.send();
 }

 function myFunction(name) {
    var x = document.getElementById("body");
    document.getElementById("demo").innerHTML = `Welcome ${name}`
    x.style.display = "block";
    
  }