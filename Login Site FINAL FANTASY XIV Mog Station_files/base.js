jQuery(document).ready(function(){
	jQuery('.send').click(
		function(e){
			e.preventDefault();
			var action = jQuery(this).attr("action");
			jQuery("form").attr("action",action);
			jQuery("form").submit();

		}
	);
});