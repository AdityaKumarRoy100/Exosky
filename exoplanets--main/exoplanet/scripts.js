
// document.getElementById("fetchData").addEventListener("click", async () => {
//   const exoplanetData = document.getElementById("exoplanetData");
//   exoplanetData.innerHTML = "<p class='loading'>Loading...</p>"; // Loading message

//   try {
//     const response = await fetch(
//       "https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?table=cumulative&format=json"
//     );
//     const data = await response.json();
    
//     exoplanetData.innerHTML = "<h3>Exoplanet Data</h3>";

//     // Display each planet's data with a delay for animation
//     data.slice(0, 10).forEach((planet, index) => {
//       setTimeout(async () => {
//         const planetInfo = document.createElement("div");
//         planetInfo.classList.add("planet-info");

//         // Fetch image for each planet
//         const imageUrl = await fetchExoplanetImage(planet.kepler_name || "exoplanet");

//         planetInfo.innerHTML = `
//           <p><strong>Kepler Name:</strong> ${planet.kepler_name || "N/A"}</p>
//           <p><strong>Orbital Period:</strong> ${planet.koi_period ? planet.koi_period + " days" : "N/A"}</p>
//           <p><strong>Planet Radius:</strong> ${planet.koi_prad ? planet.koi_prad + " Earth radii" : "N/A"}</p>
//           <p><strong>Disposition:</strong> ${planet.koi_disposition || "N/A"}</p>
//           <p><strong>Star Temperature:</strong> ${planet.koi_steff ? planet.koi_steff + " K" : "N/A"}</p>
//           <img src="${imageUrl}" alt="Image of ${planet.kepler_name}" />
//           <hr>
//         `;

//         exoplanetData.appendChild(planetInfo);
//       }, index * 200); // Stagger each planet by 200ms
//     });
//   } catch (error) {
//     exoplanetData.innerHTML = "<p>Error fetching data. Please try again.</p>";
//     console.error("Error fetching data:", error);
//   }
// });


document.getElementById("fetchData").addEventListener("click", async () => {
  const exoplanetData = document.getElementById("exoplanetData");
  exoplanetData.innerHTML = "<p class='loading'>Loading...</p>";

  try {
    const response = await fetch(
      "https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?table=cumulative&format=json"
    );
    const data = await response.json();
    
    exoplanetData.innerHTML = "<h3>Exoplanet Data</h3>";

    // Loop through fetched planet data
    data.slice(0, 10).forEach(planet => {
      const planetInfo = document.createElement("div");
      planetInfo.classList.add("fetched-planet-info"); // Add the space-themed card class

      // Create the content inside the card
      planetInfo.innerHTML = `
        <h3>${planet.kepler_name || "Unknown Planet"}</h3>
        <p><strong>Orbital Period:</strong> ${planet.koi_period || "N/A"} days</p>
        <p><strong>Planet Radius:</strong> ${planet.koi_prad || "N/A"} Earth radii</p>
        <p><strong>Star Temperature:</strong> ${planet.koi_steff || "N/A"} K</p>
        <img src="path-to-planet-image.jpg" alt="Image of ${planet.kepler_name}">
      `;

      exoplanetData.appendChild(planetInfo); // Append the card to the container
    });
  } catch (error) {
    exoplanetData.innerHTML = "<p>Error fetching data. Please try again.</p>";
    console.error("Error fetching data:", error);
  }
});
