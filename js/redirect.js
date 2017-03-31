   // jQuery URL redirection
   $(document).ready( function() {
    if(localStorage.getItem("type") == null)
    {
      url = "login.html";
      $( location ).attr("href", url);
    }
   
   });