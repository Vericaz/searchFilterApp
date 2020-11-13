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

// function myFunction() {
//     let input, filter, items, text, a, i, txtValue;

//     input = document.getElementById('search-item');
//     filter = input.value.toUpperCase();
//     items = document.getElementById('store-items')
//     text = document.getElementsByClassName("store-item")

//     for (i=0; i <text.length; i++) {
//         a = text[i].getElementsByTagName("h5")[o];
//         txtValue = a.textContent || a.innerText;
//         if (txtValue.toUpperCase().indexOf(filter)>-1 {
//             text[i].style.display = ""
//         } else )
//     }
// }
