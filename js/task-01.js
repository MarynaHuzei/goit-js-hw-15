const totalCategories = document.getElementById("categories").children.length;
console.log(`Number of categories: ${totalCategories}`);

const categoriesList = document.querySelectorAll("h2");
categoriesList.forEach((title) => {
  console.log("Category:", title.textContent);
  console.log("Elements:", title.nextElementSibling.children.length);
});
