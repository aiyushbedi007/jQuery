$(window).load(function() {

var checkval=false;

$("#check").bind("click",function(event){
    event.preventDefault();
    var login = localStorage.getItem("login");//Retrieve the stored data 
    login = JSON.parse(login); //Converts string to object
    if (login == null){
        alert('User must login for displaying contacts');
    }
    else{
        $('#myModal').modal('show'); //Show Modal on Successful Login

    }
});

$("#logout").on("click", function(){ 
    localStorage.removeItem("login"); //Remove login data from Local Storage and Reset the page
    location.reload();    
});
    

$(document).ready(function () {
    //event handler for submit button
    $("#btnLogin").click(function (event) {
        event.preventDefault();
        //collect Username and Password entered by user
        var userName = $("#uname").val();
        var password = $("#psw").val();

        //call the user Authenticate function
        userAuthenticate(userName, password);
        var modal = document.getElementById('id01');
        modal.style.display = "none";
    });

function userAuthenticate(userName, password) {
    var name;
    var role;
    //Fetch the Login json file containing user details
    $.getJSON("../login.json", function(data){

        var $json = data;

        $.each($json,function(i,obj)
        {
            if(obj.loginName === userName && obj.password === password) //Match the username and password from the file
            {
                //Check if the user is Active in Login file
                if (obj.status === 'active'){
                    checkval = true;
                    localStorage.setItem("login", JSON.stringify(obj));
                    name = obj.firstName;
                    role=obj.role;
                    return false;
                }
                else {
                    alert("!!!!!-----User Account is Deactive-----!!!!!");
                }

               
            }
            else{
                checkval =false;
            }
        });

        var login = localStorage.getItem("login");//Retrieve the stored data 
        login = JSON.parse(login); //Converts string to object

        if (login != null) //Check for Successfule Login
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

   //Check if the User is an admin
    if (role === "admin"){
        $(".admin").css('display','block');
    }
    else {
        $(".admin").css('display','none');
    }
    
    $("#check").data('target', $('#myModal'));
    
  }
});
});
 