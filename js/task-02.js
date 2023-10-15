const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingredientsList = document.querySelector("#ingredients");
const ingredientsItem = ingredients.map((ingredient) => {
  const item = document.createElement("li");
  item.textContent = ingredient;
  item.classList.add("item");
  return item;
});
ingredientsList.append(...ingredientsItem);
console.log(ingredientsList);
