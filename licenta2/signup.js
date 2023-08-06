function validateForm(){


    var dataToSubmit={}

    dataToSubmit["email"] = $("#email").val();
    dataToSubmit["password"] = $("#pwd").val();
    dataToSubmit["name"] = $("#name").val();
    

    console.log(dataToSubmit);

    //action="RegistrationController"

    $.ajax({
        "async": true,
        "crossDomain": true,
        "url": "http://localhost:8080/users/signup",
        "method": "POST",
        "headers": {
          "content-type": "application/json",
          "cache-control": "no-cache",
        },
        "processData": false,
        "data": JSON.stringify(dataToSubmit),
        success:function(response) {
            console.log(response);
            if(response["id"]!= -1){
                localStorage.setItem('userId', response["id"]);
                document.getElementById("formStatus").style.color = "green"
                document.getElementById("formStatus").innerHTML = "account created successfully";
            }else{
                document.getElementById("formStatus").style.color = "red"
                document.getElementById("formStatus").innerHTML = "Error creating account, email already used";
            }
           
        },
        error:function(){
            document.getElementById("formStatus").innerHTML ="Server error";
        }
    });

    return false;
}