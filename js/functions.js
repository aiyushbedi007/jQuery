$(function(){
    var operation = "A"; //"A"=Adding; "E"=Editing
    var selected_index = -1; //Index of the selected list item
    var tbClients = localStorage.getItem("tbClients");//Retrieve the stored data 
    tbClients = JSON.parse(tbClients); //Converts string to object 
    if(tbClients == null){ //If there is no data, initialize an empty array
        tbClients = [];
        }
    List();
    

    $("#frmCadastre").bind("submit",function(){
    if(operation == "A")
        return Add();
    else
        return Edit();		
    }); 

    $(".btnEdit").bind("click", function(){
    
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

    $(".btnDelete").bind("click", function(){
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
    "	<th colspan='2'>Edit | Delete </th>"+
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
        "	<td><img src='../img/edit.png' alt='Edit"+i+"' class='btnEdit' data-toggle='modal' data-target='#myModal'/></td>"+
        "	<td><img src='../img/delete.png' alt='Delete"+i+"' class='btnDelete'/></td>"+
        "</tr>");
    count=count+1;
    }
    } 

});