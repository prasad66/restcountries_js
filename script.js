var req = new XMLHttpRequest();
req.open('GET', 'https://restcountries.eu/rest/v2/all');
req.send();
req.responseType = "json";

req.onload = () => {
    const info = req.response;
    const container = document.createElement("div");
    container.setAttribute("class", "container my-5");
    
    const row = document.createElement("div");
    row.setAttribute("class", "row row-cols row-cols-md-4 g-4");
    
    info.forEach((element) => {
        
        const col = document.createElement("div");
        col.setAttribute("class", "col-12 col-md-3 my-4");
        
    const card = document.createElement("div");
    card.setAttribute("class", "card mb-4 h-100");
    
    card.innerHTML = `<img class="card-img-top border" src="${element.flag}">
    <div class="card-body">
    <h5 class="card-title">${element.name}</h5>
    <p class="card-text">
    <strong>Population: </strong>${element.population}<br />
    <strong>Region: </strong>${element.region}<br />
    <strong>Capital: </strong>${element.capital}
    </p>
    </div>`;
    col.append(card);
    row.append(col);
});
container.append(row);
  document.body.append(container);
}
