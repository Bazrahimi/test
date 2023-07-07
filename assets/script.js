//HTML Element load first

  // Step 1: HTML References
const inputEl = document.getElementById('ingredients');
const btnEl = document.getElementById('searchBtn');
const titleEl = document.getElementById('recipeTitle');
const imgEl = document.getElementById('recipeImage');
const recipeComponents = document.getElementById('recipeComponents');
const recipeTile = document.getElementById('recipeTile');
//References to ImageModal
const recipeModalEl = document.getElementById('ingredients');

// Step 3: Add API Key
const apiKey = "8734635d4cfc4d00bb8e0e29263ce8f2";

// Step 4: Function to fetch data from API
function fetchApi(ingredients) {
  //refer to API documentation and test other endpoints or parameters
  const url = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients}&apiKey=${apiKey}&number=2`;

  // GET request using Fetch
  fetch(url)
    .then(response => response.json())
    .then(function(data) {
      displayRecipe(data);
      console.log(data);
    });
}

// Step 5: Display Recipe to HTML
function displayRecipe(data) {

  if (data.length > 0) {
    imgEl.innerHTML = '';
    titleEl.innerHTML = '';
    const recipeContainer = document.getElementById('recipeTile');
    const recipeModalEl = document.getElementById('recipeModal');
   
      
  

    data.forEach(recipe => {
      // Create image element for recipeTile 
      const imageElement = document.createElement('img');
      imageElement.src = recipe.image;
      imageElement.alt = recipe.title;

      //Create title element for recipeTile
      const titleElement = document.createElement('h2');
      titleElement.textContent = recipe.title;

      //append image and title element to recipeTile
      recipeTile.appendChild(imageElement);
      recipeTile.appendChild(titleElement);

      // create elements and append to recipeModal
      const imageId = document.createElement('p');

      // TODO: I need to create a function to for rest of recipe data to render insede children of recipeModal per their their text matching

      // const recipeModalEl = document.getElementById('recipeModal');
      // recipeModalEl.innerHTML = '';

      // const recipeId = document.createElement('p');
      // recipeId.textContent = `ID: ${recipe.id}`;

      // const recipeMissedIngredientCount = document.createElement('p');
      // recipeMissedIngredientCount.textContent = `Missed Ingredient Count: ${recipe.missedIngredientCount}`;

      // const recipeMissedIngredients = document.createElement('ul');
      // recipe.missedIngredients.forEach(ingredient => {
      //   const ingredientItem = document.createElement('li');
      //   ingredientItem.textContent = ingredient.original;
      //   recipeMissedIngredients.appendChild(ingredientItem);
      // });

      // const recipeUnusedIngredients = document.createElement('ul');
      // recipe.unusedIngredients.forEach(ingredient => {
      //   const ingredientItem = document.createElement('li');
      //   ingredientItem.textContent = ingredient.original;
      //   recipeUnusedIngredients.appendChild(ingredientItem);
      // });

      // const recipeUsedIngredientCount = document.createElement('p');
      // recipeUsedIngredientCount.textContent = `Used Ingredient Count: ${recipe.usedIngredientCount}`;

      // const recipeUsedIngredients = document.createElement('ul');
      // recipe.usedIngredients.forEach(ingredient => {
      //   const ingredientItem = document.createElement('li');
      //   ingredientItem.textContent = ingredient.original;
      //   recipeUsedIngredients.appendChild(ingredientItem);
      // });

      // recipeModalEl.appendChild(recipeId);
      // recipeModalEl.appendChild(recipeMissedIngredientCount);
      // recipeModalEl.appendChild(recipeMissedIngredients);
      // recipeModalEl.appendChild(recipeUnusedIngredients);
      // recipeModalEl.appendChild(recipeUsedIngredientCount);
      // recipeModalEl.appendChild(recipeUsedIngredients);
    });




  } else {
    //display message if no recipe found
    const NoRecipeMessage = "No recipe found.";
    noRecipeEl.textContent = NoRecipeMessage;
  };
};

// Step 2: Add an event listener to the search button
btnEl.addEventListener('click', function() {
  const userInput = inputEl.value;
  fetchApi(userInput);
});

