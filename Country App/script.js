async function getCountry() {
  const country = document.getElementById("search").value;

  try {
    const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
    const data = await res.json();

    const c = data[0];

    document.getElementById("result").innerHTML = `
      <h2>${c.name.common}</h2>
      <img src="${c.flags.png}" width="150">
      <p>Capital: ${c.capital}</p>
      <p>Population: ${c.population.toLocaleString()}</p>
      <p>Region: ${c.region}</p>
    `;
  } catch (err) {
    document.getElementById("result").innerHTML = "Country not found ❌";
  }
}