jQuery(document).ready(function(){
	
	//Add Class Js to html
	jQuery('html').addClass('js');	
	
    // MENU //
	jQuery("ul.sf-menu").supersubs({ 
		minWidth		: 12,		// requires em unit.
		maxWidth		: 12,		// requires em unit.
		extraWidth		: 3	// extra width can ensure lines don't sometimes turn over due to slight browser differences in how they round-off values
		// due to slight rounding differences and font-family 
	}).superfish();  // call supersubs first, then superfish, so that subs are 
	// not display:none when measuring. Call before initialising 
	// containing tabs for same reason. 
	
	// MOBILE MENU DROPDOWN //
	jQuery('#topnav').tinyNav({
		active: 'selected', // String: Set the "active" class
        header: 'Navigation' // String: Specify text for "header" and show header instead of the active item
	});
	
	
	// CHART TOGGLE //
	
	//Hide the tooglebox when page load
	jQuery(".shop-box").hide();
	//slide up and down when click over heading 2
	jQuery("#shopping-cart").click(function(){
		// slide toggle effect set to slow you can set it to fast too.
		jQuery(this).next(".shop-box").slideToggle("slow");
		return true;
	});
	
	// TABS AND TOGGLE //
	//jQuery tab
	jQuery(".tab-content").hide(); //Hide all content
	jQuery("ul.tabs li:first").addClass("active").show(); //Activate first tab
	jQuery(".tab-content:first").show(); //Show first tab content
	//On Click Event
	jQuery("ul.tabs li").click(function() {
		jQuery("ul.tabs li").removeClass("active"); //Remove any "active" class
		jQuery(this).addClass("active"); //Add "active" class to selected tab
		jQuery(".tab-content").hide(); //Hide all tab content
		var activeTab = jQuery(this).find("a").attr("href"); //Find the rel attribute value to identify the active tab + content
		jQuery(activeTab).fadeIn(200); //Fade in the active content
		return false;
	});
	
	//jQuery toggle
	jQuery(".toggle_container").hide();
	jQuery("h2.trigger").click(function(){
		jQuery(this).toggleClass("active").next().slideToggle("slow");
	});
	
	// FADE EFFECT //
	if (jQuery.browser.msie && jQuery.browser.version < 7) return; // Don't execute code if it's IE6 or below cause it doesn't support it.
	
	jQuery('.dessky-display-pf-img').hover(
	function() {
		jQuery(this).find('.rollover').stop().fadeTo(500, 0.60);
	},
	function() {
		jQuery(this).find('.rollover').stop().fadeTo(500, 0);
	}
	)
	
	// PRETTYPHOTO //
	jQuery('a[data-rel]').each(function() {jQuery(this).attr('rel', jQuery(this).data('rel'));});
	jQuery("a[rel^='prettyPhoto']").prettyPhoto({animationSpeed:'slow',theme:'facebook',gallery_markup:'',slideshow:2000});
	
});