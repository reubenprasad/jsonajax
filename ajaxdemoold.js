$(document).ready(function(){
    $("#disp").click(function(){
        $.ajax({
            type:"GET",
            url:"https://jsonplaceholder.typicode.com/users",
            success:function(data){
               var output ="<table><thead><tr><th>name</th><th>username</th><th>email</th><th>address</th></tr>";
             
               for(var i in data){
                 
                     output+="<tr><td>"+data[i].name+"</td>"
                     output+="<td>"+data[i].username+"</td>";
                     output+="<td>"+data[i].email+"</td>";
                     output+="<td>"+data[i].address.street+"</td></tr>";
                  
                  $("#result").html(output);
               }
               output+= "</table>";
            }
        });
    });
});