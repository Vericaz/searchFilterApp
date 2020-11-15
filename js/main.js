// Button filtering

let buttons = document.querySelectorAll(".flex-wrap a");
let salads = document.querySelectorAll(".salad");
let pizzas = document.querySelectorAll(".pizza");
let burgers = document.querySelectorAll(".burger");
let pastas = document.querySelectorAll(".pasta");
let all = document.querySelectorAll(".store-item");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((button) => {
      button.classList.remove("active");
    });
    button.classList.add("active");

    let buttonval = button.getAttribute("data-filter");

    all.forEach((item) => {
      item.style.display = "none";
    });

    if (buttonval == "salads") {
      salads.forEach((salad) => {
        salad.style.display = "block";
      });
    } else if (buttonval == "pizza") {
      pizzas.forEach((pizza) => {
        pizza.style.display = "block";
      });
    } else if (buttonval == "burgers") {
      burgers.forEach((burger) => {
        burger.style.display = "block";
      });
    } else if (buttonval == "pasta") {
      pastas.forEach((pasta) => {
        pasta.style.display = "block";
      });
    } else {
      all.forEach((item) => {
        item.style.display = "block";
      });
    }
  });
});

// Search filtering

function myFunction() {
  let input, filter, cardContainer, cards, h5, title, i;

  input = document.getElementById("search-item");
  filter = input.value.toUpperCase();
  cardContainer = document.getElementById("store-items");
  cards = cardContainer.getElementsByClassName("store-item");

  for (i = 0; i < cards.length; i++) {
    title = cards[i].querySelector(".card-text h5.title");
    if (title.innertext.toUpperCase().indexOf(filter) > -1) {
      cards[i].style.display = "";
    } else {
      cards[i].style.display = "none";
    }
  }
}
