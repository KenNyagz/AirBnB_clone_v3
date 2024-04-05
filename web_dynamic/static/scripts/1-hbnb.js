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
