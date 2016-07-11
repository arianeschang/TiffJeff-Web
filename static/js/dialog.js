
  $(function() {
    $( "#dialog" ).dialog({
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
 
    $( "#mybutton" ).click(function() {
      $( "#dialog" ).dialog( "open" );
    });
  });
