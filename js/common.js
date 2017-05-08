$(document).ready(function(){
	var user = $(".auth_button");
	var profile = $(".profile");

	$(user).on("click", function(e){
		e.preventDefault();
		profile.slideToggle();
	});

	var bars = $(".main_mnu_button");
	var sidemenu = $(".main-menu");

	$(bars).on("click", function(e){
		e.preventDefault();
		sidemenu.slideToggle();
	});
});