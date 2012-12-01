$(function(){
	//$("table").find("td:first-child").hide().end().find("th:first-child").hide();
	//$(".location table tbody tr td:nth-child(2)").addClass("black");
	$("table").find("td:nth-child(2)").find("code, pre").addClass("text-info");
	$("table").find("td:nth-child(3)").find("code, pre").addClass("text-success");
	$("table").find("td:nth-child(4)").find("code, pre").addClass("text-error");
	//$("table").find("td:nth-child(2)").find("pre").addClass("text-info");

	//$('#navbar').scrollspy();

	$nav = $("#nav").find("li");

	$(nav).find("a").smoothScroll({offset:-40});

	$(".brand").smoothScroll({offset:-40});

	$nav.click(function(){
		$nav.each(function(){
			$(this).removeClass("active");
		});
		$(this).addClass("active");
	});
});