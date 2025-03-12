function loadCategories(){
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
  .then((res)=>res.json())
  .then((data)=>displayCategories(data.categories));
}

function displayCategories(categorie){
  console.log(categorie);
}

loadCategories();