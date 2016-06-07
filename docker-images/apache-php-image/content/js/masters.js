$(function() {
	console.log("Loading masters");
	
	function loadMasters() {
		$.getJSON( "/api/students/", function( masters ) {
		console.log( masters );
		var message = "Nobody is here";
		if( masters.length > 0 ) {
			message = masters[0].Pokémon + " belongs to " + masters[0].Maitre; 
		}
		$(".intro-text").text(message);
	 });
	};
	
	loadMasters();
	setInterval( loadMasters, 2000 );
	
});