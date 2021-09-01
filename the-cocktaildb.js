// Taking search Input 
const searchJuice = () => {
    const searchField = document.getElementById('search-input');
    const searchText = searchField.value; 
    //console.log(searchText);
    searchField.value = '';

    // Giving Error Message for Empty search
if (searchField == '') {
    console.log('Please write a name of juice');
}

// Showing search results
else {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchText}`;
    console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => displaySearchResult(data.drinks))

    }
}
//searchJuice();
const displaySearchResult = drinks => {
    //console.log(drinks);
    const searchResults = document.getElementById('search-result');
    // Clear Previous Search Result
    searchResults.textContent = '';
    if(drinks.lenght == 0){
        console.log('No Result Found')
    }
    drinks.forEach(drink => {
        console.log(drink);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div onclick="loadDrinkDetail(${drink.idDrink})" class="card h-100">
            <img src="${drink.strDrinkThumb}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${drink.strDrink}</h5>
              <p class="card-text">${drink.strInstructions.slice(0, 250)}</p>
            </div>
          </div>
        `;
        searchResults.appendChild(div);
    })
}
//  Drink Detail 
const loadDrinkDetail = drinkId => {
    console.log(drinkId);
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkId}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayDrinkDetail(data));
}

const displayDrinkDetail = drink => {
    console.log(drink);
    const singleJuiceDetail = document.getElementById('single-juice-detail');
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
    <img src="${drink.strDrinkThumb}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${drink.strDrink}</h5>
      <p class="card-text">${drink.strInstructions.slice(0, 250)}</p>
      <a href="${drink.strYoutube}" class="btn btn-primary">Go somewhere</a>
      </div>
    `;
    singleJuiceDetail.appendChild(div);
}

