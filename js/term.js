 $(window).load(function(){
         $( "#myDangerAlert").hide();
$(function () {
    $("table#termTable").on("click", ".remove", function () {
        $(this).closest('tr').remove();
    });
});
});
  function addCourse(){
    var table = document.getElementById("termTable");
    var courseName = $( "#selCourseName option:selected");
    var masterName = $( "#selMaster option:selected");
    var saturday = $( "#sat");
    var sunday = $( "#sun");
    var monday = $( "#mon");
    var tuesday = $( "#tue");
    var wednesday = $( "#wed");
    var sminute = $( "#startminute");
    var shour = $( "#starthour");
    var ehour = $( "#endhour");
    var emintue = $( "#endminute");
    var classcapacity = $( "#capacity");
    var courseGroup = $('input[name=gp]:checked');
    var examD = $( "#examDay");
    var examM = $( "#examMonth");
    var examY = $( "#examYear");
    var examMin = $( "#examMiunte");
    var examHour = $( "#examHour");

    if(courseName.val() != "none" && masterName.val() != "none" && ((saturday.prop("checked")==true) || (sunday.prop("checked")==true) || (monday.prop("checked")==true) || (tuesday.prop("checked")==true) || (wednesday.prop("checked")==true)) && shour.val()!="" && sminute.val()!= "" && classcapacity.val()!="" && courseGroup.val() && (examD.val()!="") && (examM.val()!="") && (examY.val()!="") && (examHour.val()!="") && (examMin.val()!="")) 
    {
      var row = table.insertRow(-1);
      var no = row.insertCell(0);
      var course = row.insertCell(1);
      var coursecode = row.insertCell(2);
      var gpcode = row.insertCell(3);
      var coursetype = row.insertCell(4);
      var master = row.insertCell(5);
      var days = row.insertCell(6);
      var time = row.insertCell(7);
      var exam = row.insertCell(8);
      var capacity = row.insertCell(9);
      var group = row.insertCell(10);
      var remove = row.insertCell(11);

      if(saturday.prop("checked")==true)
        days.innerHTML += $("label[for=satVal]").text();
      if(sunday.prop("checked")==true)
        days.innerHTML += $("label[for=sunVal]").text();
      if(monday.prop("checked"))
        days.innerHTML += $("label[for=monVal]").text();
      if(tuesday.prop("checked")==true)
        days.innerHTML += $("label[for=tueVal]").text();
      if(wednesday.prop("checked")==true)
        days.innerHTML += $("label[for=wedVal]").text();

      no.innerHTML = table.rows.length-1;
      course.innerHTML = courseName.text();
      coursecode.innerHTML = "-";
      gpcode.innerHTML = table.rows.length-1;
      coursetype.innerHTML = "-";
      master.innerHTML = masterName.text();
      time.innerHTML = shour.val() + ":" + sminute.val() + " تا "+ ehour.val() + ":" + emintue.val();
      capacity.innerHTML = classcapacity.val();
      group.innerHTML = courseGroup.closest('label').text();
      exam.innerHTML = examY.val()+"/"+examM.val()+"/"+examD.val()+ " - " + examHour.val() + ":" + examMin.val(); 

      var removeB = document.createElement("button");
      removeB.className="btn btn-danger remove show_tip";
      var trash = document.createElement("i");
      trash.className="fa fa-trash-o";
      removeB.appendChild(trash);
      remove.appendChild(removeB);
    }
  }
  function addNewTerm()
  {
    var nimsal = $( "#term");
    if(nimsal.val() == "none")
    {
       $( "#myDangerAlert").show();
    }
    else{
      $( "#myDangerAlert").hide();
    }
  }