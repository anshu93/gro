
$(document).ready(function() {
	$('#cart-id').on("click", function(){
		$(".cart-dropdown").toggle("linear");
	});

	$('#close-button').on("click", function(){
		$(".cart-dropdown").toggle("linear");
	});
});


$(function(){
	$(document).on('ajax:success', '#cart-id', function(evt, data) {
		$("#cart-list").html(data);
	});

	$(document).on('ajax:before', '#cart-id', function(evt, data) {
		var loader = '<img class = "loader" src = "/shopping/home/img/ajax-loader.gif">';
		$("#cart-list").html(loader);
	});
});