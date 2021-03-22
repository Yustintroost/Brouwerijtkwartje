$(document).ready(function(){
    $("#subnav").hide();
	$('#Hamburger').click(function(){
        $(this).toggleClass('open');
        $("#subnav").slideToggle();
    });
    
});

