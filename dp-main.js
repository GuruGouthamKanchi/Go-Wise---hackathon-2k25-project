let userLocation = {};
        function initMap() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function(position) {
                    userLocation = { lat: position.coords.latitude, lng: position.coords.longitude };
                    var map = new google.maps.Map(document.getElementById('map'), { zoom: 12, center: userLocation });
                    new google.maps.Marker({ position: userLocation, map: map, title: "You are here!" });
                }, function() {
                    alert("Geolocation is not supported or permission denied.");
                });
            } else {
                alert("Geolocation is not supported by your browser.");
            }
        }
        $(".btn-group button").click(function() {
            if (!userLocation.lat || !userLocation.lng) {
                alert("Please allow location access to generate your itinerary.");
                return;
            }
            let days = $(this).data("days");
            $("#loading-spinner").show();
            $("#itinerary-container").empty();
            const requestData = {
                contents: [{
                    parts: [{
                        text: `I am at latitude ${userLocation.lat}, longitude ${userLocation.lng}. 
                        Suggest a ${days}-day plan including: Places to Visit, Food Recommendations, 
                        Cultural Experiences, Safety Tips, Local Phrases for Travelers, and History Facts. Organize them separately for each day.`
                    }]
                }]
            };
            $.ajax({
                url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyB-kn6BUb8z3AtVMqfvgsVEBGd16HF9gZ0",
                method: "POST",
                contentType: "application/json",
                data: JSON.stringify(requestData),
                success: function(response) {
                    $("#loading-spinner").hide();
                    let itineraryText = response.candidates[0].content.parts[0].text;
                    let lines = itineraryText.split("\n");
                    let currentDay = "";
                    let currentCategory = "";
                    let itineraryHTML = "";
                    lines.forEach(line => {
                        if (/^Day \d+/.test(line)) {
                            currentDay = `<h3 class='text-center my-4'>${line}</h3>`;
                        } else if (line.includes("Places to Visit")) {
                            currentCategory = "<h4 class='category-section'>Places to Visit</h4>";
                        } else if (line.includes("Food Recommendations")) {
                            currentCategory = "<h4 class='category-section'>Food Recommendations</h4>";
                        } else if (line.includes("Cultural Experiences")) {
                            currentCategory = "<h4 class='category-section'>Cultural Experiences</h4>";
                        } else if (line.includes("Safety Tips")) {
                            currentCategory = "<h4 class='category-section'>Safety Tips</h4>";
                        } else if (line.includes("Local Phrases for Travelers")) {
                            currentCategory = "<h4 class='category-section'>Local Phrases for Travelers</h4>";
                        } else if (line.includes("History Facts")) {
                            currentCategory = "<h4 class='category-section'>History Facts</h4>";
                        } else if (line.trim()) {
                            let formattedText = `<p>${line.replace(/\*\*(.*?)\*\*/g, "<b>$1</b>")}</p>`;
                            itineraryHTML += currentDay + currentCategory + formattedText;
                            currentDay = "";
                            currentCategory = "";
                        }
                    });
                    $("#itinerary-container").html(itineraryHTML);
                },
                error: function() {
                    $("#loading-spinner").hide();
                    $("#itinerary-container").html("<p class='text-danger text-center'>Error fetching itinerary.</p>");
                }
            });
        });