// Get the image links from Google Sheets API and display them on the homepage
fetch('https://docs.google.com/spreadsheets/d/1bbk91PpCKNeC9xi_2qdyRofUgHZPQspqNM2D8Q1JPok/edit?usp=sharing')
    .then(response => response.json())
    .then(data => {
        const images = data.feed.entry;
        const menuContainer = document.getElementById('menu-container');

        images.forEach((imageData) => {
            const img = document.createElement('img');
            img.src = imageData.content.$t; // Assuming the content contains the image URL
            menuContainer.appendChild(img);
        });
    });
