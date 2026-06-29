async function searchRecipes() {
  const query = document.getElementById("searchInput").value;
  const resultsDiv = document.getElementById("results");

  resultsDiv.innerHTML = "Loading...";

  if (!query) {
    resultsDiv.innerHTML = "Please enter a search term.";
    return;
  }

  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
    );
    const data = await response.json();

    resultsDiv.innerHTML = "";

    if (!data.meals) {
      resultsDiv.innerHTML = "No recipes found 😢";
      return;
    }

    data.meals.forEach(meal => {
      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
        <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
        <h3>${meal.strMeal}</h3>
        <p><strong>Category:</strong> ${meal.strCategory}</p>
        <p><strong>Area:</strong> ${meal.strArea}</p>
      `;

      resultsDiv.appendChild(card);
    });

  } catch (error) {
    resultsDiv.innerHTML = "Something went wrong. Try again later.";
    console.error(error);
  }
}