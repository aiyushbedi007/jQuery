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
    
    if (cli.exp ==  'Yes') {
        $("#exp1").prop("checked", true);
    }

    if (cli.exp == 'No') {
        $("#exp2").prop("checked", true);
    }

    if (cli.gender ==  'Male') {
        $("#gender1").prop("checked", true);
    }

    if (cli.gender ==  'Female') {
        $("#gender2").prop("checked", true);
    }

    if (cli.gender ==  'Transgender') {
        $("#gender3").prop("checked", true);
    }

    $("#title").val(cli.title);
    $("#fname").val(cli.fname);
    $("#lname").val(cli.lname);
    $("#email").val(cli.email);
    $("#dob").val(cli.dob);
    $("#phone").val(cli.phone);
    $("#gender").val(cli.gender);
    $("#address").val(cli.address);
    $("#address2").val(cli.address2);
    $("#city").val(cli.city);
    $("#state").val(cli.state);
    $("#zip").val(cli.zip);
    $("#college").val(cli.college);
    $("#univ").val(cli.univ);
    $("#place").val(cli.place);
    $("#marks").val(cli.marks);
    $("#back").val(cli.back);
    $("#spcl").val(cli.spcl);
    $("#major").val(cli.major);
    $("#datepicker").val(cli.datepicker);
    $("#exp").val(cli.exp);
    $("#title").attr("readonly","readonly");
    }); 

    $(".btnDelete").bind("click", function(){
    selected_index = parseInt($(this).attr("alt").replace("Delete", ""));
    Delete();
    List();
    });
    
    function Add(){
    var exp;
    if (document.getElementById('exp1').checked) {
        exp = document.getElementById('exp1').value;
        }
    if (document.getElementById('exp2').checked) {
        exp = document.getElementById('exp2').value;
    }
    
    var gender;
    if (document.getElementById('gender1').checked) {
        gender = document.getElementById('gender1').value;
        }
    if (document.getElementById('gender2').checked) {
        gender = document.getElementById('gender2').value;
    }
    if (document.getElementById('gender3').checked) {
        gender = document.getElementById('gender3').value;
    }

    var client = JSON.stringify({
    title       : $("#title").val(),
    fname       : $("#fname").val(),
    lname       : $("#lname").val(),
    email       : $("#email").val(),
    dob         : $("#dob").val(),
    phone       : $("#phone").val(),
    gender      : gender,
    address     : $("#address").val(),
    address2    : $("#address2").val(),
    city        : $("#city").val(),
    state       : $("#state").val(),
    zip         : $("#zip").val(),
    college     : $("#college").val(),
    univ        : $("#univ").val(),
    place       : $("#place").val(),
    marks       : $("#marks").val(),
    back        : $("#back").val(),
    spcl        : $("#spcl").val(),
    major       : $("#major").val(),
    datepicker  : $("#datepicker").val(),
    exp         : exp,
    });
    tbClients.push(client);
    localStorage.setItem("tbClients", JSON.stringify(tbClients));
    return true;
    } 


    function Edit(){
    var exp;
    if (document.getElementById('exp1').checked) {
            exp = document.getElementById('exp1').value;
            }
    if (document.getElementById('exp2').checked) {
        exp = document.getElementById('exp2').value;
    }
 
    var gender;
    if (document.getElementById('gender1').checked) {
        gender = document.getElementById('gender1').value;
        }
    if (document.getElementById('gender2').checked) {
        gender = document.getElementById('gender2').value;
    }
    if (document.getElementById('gender3').checked) {
        gender = document.getElementById('gender3').value;
    }
    tbClients[selected_index] = JSON.stringify({
        title       : $("#title").val(),
        fname       : $("#fname").val(),
        lname       : $("#lname").val(),
        email       : $("#email").val(),
        dob         : $("#dob").val(),
        phone       : $("#phone").val(),
        gender      : gender,
        address     : $("#address").val(),
        address2    : $("#address2").val(),
        city        : $("#city").val(),
        state       : $("#state").val(),
        zip         : $("#zip").val(),
        college     : $("#college").val(),
        univ        : $("#univ").val(),
        place       : $("#place").val(),
        marks       : $("#marks").val(),
        back        : $("#back").val(),
        spcl        : $("#spcl").val(),
        major       : $("#major").val(),
        datepicker  : $("#datepicker").val(),
        exp         : exp,    
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
    "	<th>Gender</th>"+
    "	<th>Date of Birth</th>"+
    "	<th>Place</th>"+
    "	<th>Work Experience</th>"+
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
        "	<td>"+cli.gender+"</td>" + 
        "	<td>"+cli.dob+"</td>" + 
        "	<td>"+cli.place+"</td>" + 
        "	<td>"+cli.exp+"</td>" + 
        "	<td><img src='../img/edit.png' alt='Edit"+i+"' class='btnEdit' data-toggle='modal' data-target='#myModal'/></td>"+
        "	<td><img src='../img/delete.png' alt='Delete"+i+"' class='btnDelete'/></td>"+
        "</tr>");
    count=count+1;
    }
    } 

});