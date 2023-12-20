//! API URL: https://restaurant.webwide.ge/api/Products/GetAll (GET)

let apiUrl = "https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast";
let categoriesList = [];

let categoriesListContainer = document.getElementById("categories-list");
fetch(apiUrl, {
  method: "GET",
})
  .then((response) => response.json()) 
  .then((categories) => {
    categories.forEach((category) => {
      categoriesList.push(category);
    });

    categoriesList.forEach((category) => {
      categoriesListContainer.innerHTML += `
        <li> (${category.id}) ${category.name} </li>
        `;
    });
  });
function searchDish() {
let dishId = document.getElementById("dish-id").value;
  let CategoryApiUrl =
    "https://www.themealdb.com/api/json/v1/1/filter.php?i="
  let formedUrl = CategoryApiUrl + dishId;
  console.log(formedUrl);
  let productsList = [];
  let productContainer = document.getElementById("product-container");
  let producstListCategory = document.getElementById("products-list-category");

  fetch(formedUrl, {
    method: "GET",
  })
    .then((response) => response.json()) 
    .then((products) => {
       
        productsList = [];
        productContainer.innerHTML = "";
        console.log(products) 
        producstListCategory.innerHTML  = products.name


      products.products.forEach((product) => {
        productsList.push(product);
        console.log(product);
      });

      productsList.forEach((product) => {
        productContainer.innerHTML += `
      <div cl   ass="card" style="width: 18rem;">
      <img src="${product.image}" class="card-img-top" alt="...">
      <div class="card-body">
          <p class="card-text">${product.name}</p>
            <p class="card-text">${product.price} ლარი</p>
        </div>
        </div>
        `;
      });
    });
}

















