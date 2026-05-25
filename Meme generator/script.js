async function getMeme() {
  try {
    const response = await fetch("https://meme-api.com/gimme");
    const data = await response.json();

    document.getElementById("title").innerText = data.title;
    document.getElementById("meme").src = data.url;

  } catch (error) {
    alert("Failed to load meme 😢");
  }
}