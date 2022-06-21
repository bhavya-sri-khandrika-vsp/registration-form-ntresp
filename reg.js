function signup(){

    // var first_name = document.forms["myForm"]["firstname"].value;
    // console.log(first_name);
    // var last_name = document.forms["myForm"]["lastname"].value;
    // var email_ID = document.forms["myForm"]["emailid"].value;
    // var msg_txt = document.forms["myForm"]["msgtxt"].value;

   var first_name = document.getElementById('firstname').value;
   var last_name = document.getElementById('lastname').value;
   var email_ID = document.getElementById('emailid').value;
   var msg_txt = document.getElementById('msgtxt').value;
    



   if (first_name == "" || last_name == "" || email_ID == "" || msg_txt == "")
   { 
      document.getElementById("con").disabled = true;
      alert("The mandatory fields are empty. Please try again.");  	
      return false; 
   }
   else{
      window.open("success.html", "_blank");
   }
}
document.getElementById("con").disabled = true;
// document.getElementById("msgtxt").addEventListener("mouseleave", mouseLeave);
function mouseLeave(){
   document.getElementById("con").disabled = false;
}

