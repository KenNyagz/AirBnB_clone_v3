$(document).ready(function () {
	const checked_amenities = {};
	$("li input[type=checkbox]").change(function () {
		if (this.checked) {
			checked_amenities[this.dataset.name] = this.dataset.id;
		} else {
			delete checked_amenities[this.dataset.name];
		}
		$(".amenities h4").text(Object.keys(checked_amenities).sort().join(", "));
	});

  $.ajax({
    url: "http://0.0.0.0:5001/api/v1/status/",
    type: "GET",
    success: function(response) {
      if (response.status === "OK") {
        $("#api_status").addClass("availbale");
      } else {
        $("#api_status").removeClass("available");
      }
    },
  });
});
