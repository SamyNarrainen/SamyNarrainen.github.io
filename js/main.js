
$(function() {
    $("#navigationBarList li a").hover(
        function() {
            $(this).animate({ color: "#2777EC" }, 'slow');
        },function() {
            $(this).animate({ color: "#FFFFFF" }, 'slow');
    });
});

$(function() {
	window.scrollTo(0,0);
});


$(document).ready(function(){
	$("#wrapper").fadeIn("slow");

	$('a[href^="#"]').on('click',function (e) {
		e.preventDefault();

		var target = this.hash;
		$target = $(target);

		$('html, body').stop().animate({
    		'scrollTop': $target.offset({}).top
		}, 900, 'swing', function () {
    		window.location.hash = target;
		});

		$('html, body').stop().animate({
			'scrollTop': $target.offset().top
		}, 900, 'swing');

	});
});
