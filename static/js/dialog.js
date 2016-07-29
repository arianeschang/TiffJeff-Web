function overlay() {
    el = document.getElementById("overlay");
   el.style.visibility = (el.style.visibility == "visible") ? "hidden" : "visible";
 }





  $(function() {
    $( "#our_story_dialog" ).dialog({
      autoOpen: false,
      modal:true,
      resizable:false,
      width:400,
      height:400,
      show: {
        effect: "fade",
        duration: 100
      },
      hide: {
        effect: "fade",
        duration: 100
      }
    });
 
    $( "#our_story" ).click(function() {
      $( "#our_story_dialog" ).dialog( "open" );
    });
  });


  $(function() {
    $( "#about_us_dialog" ).dialog({
      autoOpen: false,
      modal:true,
      resizable:false,
      width:400,
      height:400,
      show: {
        effect: "fade",
        duration: 100
      },
      hide: {
        effect: "fade",
        duration: 100
      }
    });
 
    $( "#about_us" ).click(function() {
      $( "#about_us_dialog" ).dialog( "open" );
    });
  });
