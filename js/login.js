$(window).load(function() {

var checkval=false;

$("#check").bind("click",function(event){
    event.preventDefault();
    var login = localStorage.getItem("login");//Retrieve the stored data 
    login = JSON.parse(login); //Converts string to objec
    if (login == null){
        alert('User must login for displaying contacts');
    }
    else{
        //alert("Login Successful")
        $('#myModal').modal('show'); 

    }
});

$("#logout").on("click", function(){ 
    localStorage.removeItem("login");
    location.reload();    
});
    

$(document).ready(function () {
    //event handler for submit button
    $("#btnLogin").click(function (event) {
        event.preventDefault();
        //collect userName and password entered by users
        var userName = $("#uname").val();
        var password = $("#psw").val();

        //call the authenticate function
        authenticate(userName, password);
        var modal = document.getElementById('id01');
        modal.style.display = "none";
    });

function authenticate(userName, password) {
    var name;
    var role;
    $.getJSON("../login.json", function(data){

        var $json = data;

        $.each($json,function(i,obj)
        {
            if(obj.loginName == userName && obj.password == password)
            {
                checkval = true;
                localStorage.setItem("login", JSON.stringify(obj));
                name = obj.firstName;
                role=obj.role;
                return false;
            }
            else{
                checkval =false;
            }
        });

        var login = localStorage.getItem("login");//Retrieve the stored data 
        login = JSON.parse(login); //Converts string to object

        if (login != null)
                {
                    myFunction(name,role)
                }
            else
                {
                    alert("!!!!!-----Incorrect login Details-----!!!!!");
                    var x = document.getElementById("body");
                    x.style.display = "none";
                }
    
}).fail(function(){
    console.log("An error has occurred.");
});
 }

 function myFunction(name,role) {
    var x = document.getElementById("body");
    document.getElementById("demo").innerHTML = `Welcome ${name}!!!`
    x.style.display = "block";

   
    if (role=="admin"){
        $(".admin").css('display','block');
    }
    else {
        $(".admin").css('display','none');
    }
    
    $("#check").data('target', $('#myModal'));
    
  }
});
});
 