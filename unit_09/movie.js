let link = window.location.href;
const url = "https://www.omdbapi.com/?i=" + link.split("?")[1] + "&apikey=e1adebcf";

function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

let movieImgContainer = document.getElementById("movie-img");
let movieTextContainer = document.getElementById("movie-info");
fetch(url)
    .then((resp) => resp.json())
    .then(function (data) {
        document.title = data["Title"];
        let title = createNode("h1"),
            releaseDate = createNode("h5"),
            plot = createNode("p"),
            director = createNode("p"),
            actors = createNode("p"),
            ratings = createNode("p"),
            poster = createNode("img");
        
        poster.setAttribute("src", data["Poster"]);
        poster.setAttribute("class", "w-100");
        title.innerText = data["Title"];
        releaseDate.innerText = data["Released"];
        plot.innerText = data["Plot"]
        director.innerHTML = '<span class="font-weight-bold">Director:</span> ' + data["Director"];
        actors.innerHTML = '<span class="font-weight-bold">Actors:</span> ' + data["Actors"];

        ratings.innerHTML = '<span class="font-weight-bold">Ratings:</span>';
        ratings.innerHTML += '<ul>'
        let ratingsList = data["Ratings"];
        for (let rating of ratingsList) {
            ratings.innerHTML += `<li><span class="font-weight-bold">${rating["Source"]}:</span>  ${rating["Value"]}</li>`;
        }
        ratings.innerHTML += '</ul>'

        append(movieImgContainer, poster);
        append(movieTextContainer, title);
        append(movieTextContainer, releaseDate);
        append(movieTextContainer, plot);
        append(movieTextContainer, director);
        append(movieTextContainer, actors);
        append(movieTextContainer, ratings);
    })
    .catch(function (error) {
      console.log(error);
    });