const ingredientsData = {
  1: ['Грибы эноки', 'Грибы обжаренные с маринованной говядиной в сладко-остром соусе'],
  2: ['Кимпаб Ли Минхо', 'Любимый Кимпаб Ли Ноу из Stray Kids, с начинкой из омлета вместо риса, копчёной курицей и майонезом'],
  3: ['Кимпаб', 'Лист нори, тонкий слой риса, шпинат, морковь, свежий огурец, острая капуста кимчи, омлет томого, охотничьи колбаски, подаётся с бульоном.'],
  4: ['Корн-дог дошик', 'Сосиска с сыром моцарелла в панировке из дошика'],
  5: ['Корн-дог фри', 'Сосиска с сыром моцарелла в панировке из картошки фри'],
  6: ['Корн-дог хлопья', 'Сосиска с сыром моцарелла в панировке из хлопьев'],
};

function showIngredients(productId) {
  const ingredientsContainer = document.getElementById('ingredients');
  const ingredientsList = document.getElementById('ingredients-list');

  ingredientsList.innerHTML = '';

  if (ingredientsData[productId]) {
    ingredientsData[productId].forEach((ingredient) => {
      const listItem = document.createElement('li');
      listItem.textContent = ingredient;
      ingredientsList.appendChild(listItem);
    });
  } else {
    const listItem = document.createElement('li');
    listItem.textContent = 'Состав не указан';
    ingredientsList.appendChild(listItem);
  }

  ingredientsContainer.style.display = 'block';
}

function closeIngredients() {
  const ingredientsContainer = document.getElementById('ingredients');
  ingredientsContainer.style.display = 'none';
}
function addToCart(productId) {
  // Здесь можно добавить логику для добавления продукта в корзину (это может быть хранилище на стороне клиента, например)
  
  // Показываем уведомление о добавлении в корзину
  alert('Товар добавлен в корзину!');
}
