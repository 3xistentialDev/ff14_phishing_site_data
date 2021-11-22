jQuery(document).ready(function(){	
	jQuery(".logo-black").hover(
		function(e){
			e.preventDefault();
			jQuery(this).css("cursor","pointer");
		}
	);
	jQuery(".logo-black").click(
		function(e){
			e.preventDefault();
			jQuery(this).css("cursor","pointer");
			location.href = "https://secure.square-enix.com/";
		}
	);
});