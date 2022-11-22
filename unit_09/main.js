function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

function createTitleForSearch(title) {
    let titleForSearch = "";
    for (let titlePart of title) {
        titleForSearch += (titlePart + "+");
    }
    return titleForSearch.slice(0, -1);
}

const movieContainer = document.getElementById("movies");
const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");

searchBtn.addEventListener("click", function (event) {
  event.preventDefault();
  movieContainer.innerHTML = "";
  let movieTitle = createTitleForSearch(searchInput.value.split(" "))

  let url = "https://www.omdbapi.com/?s=" + movieTitle + "&apikey=e1adebcf";
  fetch(url)
    .then((resp) => resp.json())
    .then(function (data) {
      let movies = data["Search"];
      return movies.map((movie) => {
        let cardContainer = createNode("div"),
          card = createNode("div"),
          cardImg = createNode("img"),
          cardBody = createNode("div"),
          cardTitle = createNode("h5"),
          cardText = createNode("p"),
          cardInfoBtn = createNode("a");

        cardContainer.setAttribute("class", "col-4 mb-3");
        card.setAttribute("class", "card border-0");
        cardImg.setAttribute("class", "card-img-top");
        cardImg.setAttribute("src", movie["Poster"]);
        cardBody.setAttribute("class", "card-body pl-5");
        cardTitle.setAttribute("class", "card-title mb-0");
        cardTitle.innerText = movie["Title"];
        cardText.setAttribute("class", "card-text mb-2");
        cardText.innerText = movie["Year"];
        cardInfoBtn.innerHTML = "More Information";
        cardInfoBtn.setAttribute("class", "btn btn-primary");
        cardInfoBtn.setAttribute("href", "singleMovie.html?" + movie["imdbID"]);

        append(cardBody, cardTitle);
        append(cardBody, cardText);
        append(cardBody, cardInfoBtn);
        append(card, cardImg);
        append(card, cardBody);
        append(cardContainer, card);
        append(movieContainer, cardContainer);
      });
    })
    .catch(function (error) {
      console.log(error);
    });
});