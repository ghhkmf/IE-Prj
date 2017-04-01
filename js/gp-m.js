 $(document).ready( function() {
 	if(localStorage.getItem("type") == null)
    {
      url = "login.html";
      $( location ).attr("href", url);
    }
    else if(localStorage.getItem("type") == "m")
    {
      $(".dropdown").hide(); 

      $(".masterHide").hide();
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
