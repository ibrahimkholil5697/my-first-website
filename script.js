const names = {
  "ibrahim": {
    meaning: "Father of many",
    origin: "Arabic",
    country: "Saudi Arabia, Bangladesh, Pakistan"
  },
  "muhammad": {
    meaning: "Praised",
    origin: "Arabic",
    country: "Worldwide"
  },
  "john": {
    meaning: "God is gracious",
    origin: "Hebrew",
    country: "USA, UK, Canada"
  }
};

function searchName() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const result = document.getElementById("result");

  if (names[input]) {
    result.innerHTML = `
      <h2>${input.toUpperCase()}</h2>
      <p><b>Meaning:</b> ${names[input].meaning}</p>
      <p><b>Origin:</b> ${names[input].origin}</p>
      <p><b>Countries:</b> ${names[input].country}</p>
    `;
  } else {
    result.innerHTML = "<h2>Name not found.</h2>";
  }
}
