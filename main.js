var map = L.map('map').setView([49.31, 8.08], 13);
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);
        var marker = L.marker([49.31, 8.08]).addTo(map);
        marker.bindPopup("<b>Kalmit</b>").openPopup();