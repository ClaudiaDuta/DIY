function validateForm(){


    var dataToSubmit={}

    dataToSubmit["email"] = $("#email").val();
    dataToSubmit["password"] = $("#pwd").val();
    console.log(dataToSubmit);
    $.ajax({
        "async": true,
        "crossDomain": true,
        "url": "http://localhost:8080/users/login",
        "method": "POST",
        "headers": {
          "content-type": "application/json",
          "cache-control": "no-cache",
        },
        "processData": false,
        "data": JSON.stringify(dataToSubmit),
        success:function(response) {
            console.log(response);
            if(response["status"]==true){
                localStorage.setItem('userId', response["userID"]);
                document.getElementById("formStatus").style.color = "green"
                document.getElementById("formStatus").innerHTML = "success";
                window.location.href="index.html"
            }else{
                document.getElementById("formStatus").style.color = "red"
                document.getElementById("formStatus").innerHTML = "Wrong username or password";
            }

        },
        error:function(){
            document.getElementById("formStatus").innerHTML ="Server error";
        }
    });

    return false;
}
