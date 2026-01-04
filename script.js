// ===== THEME =====
document.getElementById("themeToggle").onclick = () => {
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");
};

// ===== GEO + MAP =====
let map, marker;
document.getElementById("locBtn").onclick = () => {
  navigator.geolocation.getCurrentPosition(pos => {
    const { latitude, longitude, accuracy } = pos.coords;
    lat.textContent = latitude.toFixed(5);
    lon.textContent = longitude.toFixed(5);
    acc.textContent = accuracy.toFixed(1);

    if (!map) {
      map = L.map("map").setView([latitude, longitude], 13);
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);
      marker = L.marker([latitude, longitude]).addTo(map);
    } else {
      marker.setLatLng([latitude, longitude]);
      map.setView([latitude, longitude], 13);
    }
  });
};

// ===== IP INFO =====
document.getElementById("ipBtn").onclick = () => {
  fetch("https://ipapi.co/json/")
    .then(r => r.json())
    .then(d => {
      ip.textContent = d.ip;
      country.textContent = d.country_name;
      city.textContent = d.city;
      isp.textContent = d.org;
    });
};

// ===== ENCRYPTION DEMO =====
let secret = "ethical-key";
encBtn.onclick = () => {
  cryptoOut.value = btoa(plain.value + secret);
};
decBtn.onclick = () => {
  cryptoOut.value = atob(cryptoOut.value).replace(secret, "");
};

// ===== TERMINAL =====
const terminal = document.getElementById("terminal");
cmd.onkeydown = e => {
  if (e.key === "Enter") {
    terminal.innerHTML += `<div>> ${cmd.value}</div>`;
    terminal.innerHTML += `<div>Command executed (simulation)</div>`;
    cmd.value = "";
    terminal.scrollTop = terminal.scrollHeight;
  }
};
