   // jQuery URL redirection
   $(document).ready( function() {
    if(localStorage.getItem("type") == null)
    {
      url = "login.html";
      $( location ).attr("href", url);
    }
   
   });
     function signout()
  {
     if(localStorage.getItem("type") != null)
            {
                localStorage.removeItem("type");
            }
      window.location.replace("login.html");
  }
