$(document).ready(function() {

	//E-mail Ajax Send
	$("contact-form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "send.php", //Change
			data: th.serialize()
		}).done(function(button) {
			alert("Заявка отправлена");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});