$(function(){
    var operation = "A"; //"A"=Adding; "E"=Editing
    var selected_index = -1; //Index of the selected list item
    var tbClients = localStorage.getItem("tbClients");//Retrieve the stored data 
    tbClients = JSON.parse(tbClients); //Converts string to object 
    if(tbClients == null){ //If there is no data, initialize an empty array
        tbClients = [];
        }
    List();

    var login = localStorage.getItem("login");//Retrieve the stored data 
    login = JSON.parse(login); //Converts string to object'
    var x = document.getElementById("body");
    if (login == null){   
        x.style.display = "none";
    }
    else {
        x.style.display = "block";
    }
    

    $("#frmCadastre").bind("submit",function(event){
        $('#myModal').modal('hide');
        event.preventDefault();	
        if(operation == "A"){
            return Add();
        }   
        else{
            return Edit();
        }   	
    
    }); 

    $("body").on("click",".btnEdit", function(){    
    operation = "E";
    selected_index = parseInt($(this).attr("alt").replace("Edit", ""));
    var cli = JSON.parse(tbClients[selected_index]);
    $("#fname").val(cli.fname);
    $("#lname").val(cli.lname);
    $("#email").val(cli.email);
    $("#phone").val(cli.phone);
    $("#city").val(cli.city);
    $("#title").attr("readonly","readonly");
    }); 

    $("body").on("click",".btnDelete", function(){
    selected_index = parseInt($(this).attr("alt").replace("Delete", ""));
    Delete();
    List();
    });
    
    function Add(){
   
        var client = JSON.stringify({
        fname       : $("#fname").val(),
        lname       : $("#lname").val(),
        email       : $("#email").val(),
        phone       : $("#phone").val(),
        city        : $("#city").val(),
        });
        tbClients.push(client);
        localStorage.setItem("tbClients", JSON.stringify(tbClients));
        List();

        $( '#frmCadastre' ).each(function(){
            this.reset();
        });

        return true;
    } 


    function Edit(){

        tbClients[selected_index] = JSON.stringify({
        fname       : $("#fname").val(),
        lname       : $("#lname").val(),
        email       : $("#email").val(),
        phone       : $("#phone").val(),
        city        : $("#city").val(),
        });//Alter the selected item on the table
    localStorage.setItem("tbClients", JSON.stringify(tbClients));
    operation = "A"; //Return to default value
    List();
    return true;
    } 


    function Delete(){
    tbClients.splice(selected_index, 1);
    localStorage.setItem("tbClients", JSON.stringify(tbClients));
    } 


    function List(){
    $(document).ready(function(){
        $("#tableSearch").on("keyup", function() {
            var value = $(this).val().toLowerCase();
              $("#myTable tr").filter(function() {
                $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
              });
            });
          });		
    $("#tblList").html("");
    $("#tblList").html(
    "<thead>"+
    "	<tr>"+
    "	<th>S.No</th>"+
    "	<th>First Name</th>"+
    "	<th>Last Name</th>"+
    "	<th>Mobile</th>"+
    "	<th>Email</th>"+
    "	<th>City</th>"+
    "	<th class='admin'>Edit | Delete </th>"+
    "	</tr>"+
    "</thead>"+
    "<tbody id='myTable'>"+
    "</tbody>"
    );
    var count = 1;
    for(var i in tbClients){
    var cli = JSON.parse(tbClients[i]);
        $("#tblList tbody").append("<tr>"+
        "	<td>"+count+"</td>" + 
        "	<td>"+cli.fname+"</td>" + 
        "	<td>"+cli.lname+"</td>" + 
        "	<td>"+cli.phone+"</td>" +  
        "	<td>"+cli.email+"</td>" + 
        "	<td>"+cli.city+"</td>" + 
        // "	<td class='admin'><img src='../img/edit.png' alt='Edit"+i+"' class='btnEdit' data-toggle='modal' data-target='#myModal'/></td>"+
        "   <td class='admin'><button id='Edit' alt='Edit"+i+"' type='button' class='btnEdit' data-toggle='modal' data-target='#myModal'> <i class='far fa-edit'></i></button> &nbsp; <button id='Delete' alt='Delete"+i+"' type='button' class='btnDelete'> <i class='fas fa-times'></i></button></td>"+
        // "   <td class='admin'><button id='Delete' type='button' class='btnDelete'> <i class='fa fa-user'></i></button></td>"+
        "</tr>");
    count=count+1;
    }
    } 

});