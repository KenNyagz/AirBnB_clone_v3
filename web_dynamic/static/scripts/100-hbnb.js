$(document).ready(function () {
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

  const checked_amenities = {};
    $("li input[type=checkbox]").change(function () {
      if (this.checked) {
        checked_amenities[this.dataset.name] = this.dataset.id;
      } else {
        delete checked_amenities[this.dataset.name];
      }
      $(".amenities h4").text(Object.keys(checked_amenities).sort().join(", "));
  });

  function loadPlaces() {
    $.ajax({
      url: "http://0.0.0.0:5001/api/v1/places_search/",
      type: "POST",
      contentType: "application/json",
      data: JSON.stringify({ amenities: Object.values(checked_amenities) }),
      success: function(response) {
        $("section.places").empty();
        for (const place of response) {
          const html = `
            <article>
              <div class="title_box">
                <h2>${place.name}</h2>
                <div class="price_by_night">$${place.price_by_night}</div>
              </div>
              <div class="information">
                <div class="max_guest">${place.max_guest} Guest${place.max_guest !== 1 ? 's' : ''}</div>
                <div class="number_rooms">${place.number_rooms} Bedroom${place.number_rooms !== 1 ? 's' : ''}</div>
                <div class="number_bathrooms">${place.number_bathrooms} Bathroom${place.number_bathrooms !== 1 ? 's' : ''}</div>
              </div>
              <div class="description">
                ${place.description}
              </div>
            </article>
          `;
          $("section.places").append(html);
        }
      },
      error: function() {
        console.log("Error loading places from front-end");
      }
    });
  }

  loadPlaces();
  
  $("button").click(function() {
    loadPlaces();
  });
});
