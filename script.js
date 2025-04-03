fetch('https://spreadsheets.google.com/feeds/list/1bbk91PpCKNeC9xi_2qdyRofUgHZPQspqNM2D8Q1JPok/od6/public/values?alt=json')
    .then(response => response.json())
    .then(data => {
        const entries = data.feed.entry;
        const menuContainer = document.getElementById('menu-container'); // Make sure you have this div in your HTML

        entries.forEach((entry) => {
            const imgUrl = entry.gsx$uploadimage.$t;  // Update column name for the image URL
            const timestamp = entry.gsx$timestamp.$t;  // Timestamp (optional)

            const img = document.createElement('img');
            img.src = imgUrl;  // Set the image source from the sheet
            img.alt = "Today's Menu";  // Set alt text for the image

            const menuText = document.createElement('div');
            menuText.textContent = "Menu Uploaded on: " + timestamp;  // Display the timestamp or any description

            menuContainer.appendChild(img);
            menuContainer.appendChild(menuText);
        });
    })
    .catch(error => console.error('Error fetching data:', error));
