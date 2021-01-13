var json='[    {            "username": "user1",            "password": "password1"    },    {        "username":"user2",        "password" : "password2"    }]';

var $json=$.parseJSON(json);

var a="user2";
    var b="password2";
    var checkval = false;

$.each($json,function(i,obj)
        {
            if(obj.username == a && obj.password == b)
            {
                checkval = true; 
                return false;
            }
        });

if(checkval == true)
        {
            alert("login correct");
        }
    else
        {
            alert("!!!!!-----Incorrect login Details-----!!!!!");
        }