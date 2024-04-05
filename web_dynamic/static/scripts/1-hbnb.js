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
});


//An alternative method that works somewhat the same
/*
$(document).ready(function() {

  let presentAmenities = {};

  $('input[type="checkbox"]').change(function() {
    let amenityId = $(this).data('id'); //Get amenity ID
    let amenityName = $(this).data('name'); //Get amenity name

  if($(this).is(':checked')) {
    presentAmenities[amenityId] = amenityName;
  } else {
    delete presentAmenities[amenityId];
  }

  let amenitiesList = Object.values(presentAmenities).join(', ');
  $('.amenities h4').text('Amenities: ' + amenitiesList);
 });
*/
