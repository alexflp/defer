
$(document).ready(function(){
    $("#onlinebt").click(function(){

        document.getElementById("online").style.display=' block';
        document.getElementById("offline").style.display='none';
    });
});

$(document).ready(function(){
    $("#offlinebt").click(function(){

        document.getElementById("online").style.display='none';
        document.getElementById("offline").style.display='block ';
    });
});





$(document).ready(function(){
	 $("#s1").click(function(){
	 	$('#s1').addClass('animated shake');
     });
      $("#s2").click(function(){
	 	$('#s2').addClass('animated shake');
     });
       $("#s3").click(function(){
	 	$('#s3').addClass('animated shake');
     });

        $("#s4").click(function(){
	 	$('#s4').addClass('animated shake');
     });

         $("#s5").click(function(){
	 	$('#s5').addClass('animated shake');
     });


});


$(document).ready(function(){
  $("#f1").hover(function(){
   $('#f1').addClass('animated pulse');
    });
     $("#f2").hover(function(){
   $('#f2').addClass('animated pulse');
    });
      $("#f3").hover(function(){
   $('#f3').addClass('animated pulse');
    });
});
