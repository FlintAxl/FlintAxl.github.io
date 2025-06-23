// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("planetAgeForm");
  const input = document.getElementById("earthAgeInput");
  const results = document.getElementById("planetResults");

 const planets = [
  { name: "Mercury", orbit: 0.24, distance: "57.9 million km", image: "../../assets/images/planets/mercury.png" },
  { name: "Venus", orbit: 0.62, distance: "108.2 million km", image: "../../assets/images/planets/venus.png" },
  { name: "Earth", orbit: 1.00, distance: "149.6 million km", image: "../../assets/images/planets/earth.png" },
  { name: "Mars", orbit: 1.88, distance: "227.9 million km", image: "../../assets/images/planets/mars.png" },
  { name: "Jupiter", orbit: 11.86, distance: "778.5 million km", image: "../../assets/images/planets/jupiter.png" },
  { name: "Saturn", orbit: 29.45, distance: "1.43 billion km", image: "../../assets/images/planets/saturn.png" },
  { name: "Uranus", orbit: 84.02, distance: "2.87 billion km", image: "../../assets/images/planets/uranus.png" },
  { name: "Neptune", orbit: 164.79, distance: "4.50 billion km", image: "../../assets/images/planets/neptune.png" },
  { name: "Pluto", orbit: 248.00, distance: "5.91 billion km", image: "../../assets/images/planets/pluto.png" }
];



  function renderCards(earthAge) {
    results.innerHTML = ""; // Clear existing

    planets.forEach(p => {
      const planetAge = (earthAge / p.orbit).toFixed(2);
      const revolutions = Math.floor(planetAge);

      const card = document.createElement("div");
      card.className = "planet-card";
      card.innerHTML = `
  <img src="${p.image}" alt="${p.name}" class="planet-image" />
  <h3>${p.name}</h3>
  <p><strong>Age:</strong> ${planetAge} years</p>
  <p><strong>Revolutions:</strong> ${revolutions}</p>
  <p><strong>Orbit Time:</strong> ${p.orbit} Earth years</p>
  <p><strong>Distance:</strong> ${p.distance}</p>
`;

      results.appendChild(card);
    });
  }

  // 👇 Automatically render with default Earth age (12) on page load
  const defaultAge = 0;
  input.value = defaultAge;
  renderCards(defaultAge);

  // 👇 Also allow user to change it via the form
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const earthAge = parseFloat(input.value);
    if (!isNaN(earthAge) && earthAge > 0) {
      renderCards(earthAge);
    }
  });
});
