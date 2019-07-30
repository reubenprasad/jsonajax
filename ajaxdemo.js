$(document).ready(function(){
$("#btn1").click(function(){
    
    $.ajax({
        
        type:"GET",
        url:"https://jsonplaceholder.typicode.com/users",
       success:function(data){
           

         var output = "";
         for(var i in data)
        {
            output+="<div class='card'><div class='card-body' style='background-color:#DCDCDC'><h5 class='card-title' style='text-align:center'>"+ data[i].id +"</h5>";
            output+="<h6 class='card-subtitle mb-2' style='font-size:20px'>"+ data[i].name +"</h6>";
            output+="<p>Email :"+data[i].email+ "</p>";
            output+="<p>Address :</p>";
            output+="<p>Street : " + data[i].address.street+"</p>";
            output+="<p>City : " + data[i].address.city+"</p>";
            output+="<p>Zip Code : " + data[i].address.zipcode+"</p>";
            output+="<li "
            
            output+="</div></div><br>";
        }
          
        $('.result').html(output);
       } 
      
    
    });
});
});