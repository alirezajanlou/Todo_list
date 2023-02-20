let $ = document;
let c = console.log;

let itemContainer = $.querySelector("#list");
let icon = $.querySelector(".fa.fa-remove");
let input = $.querySelector("#input");
let form = $.querySelector("form");
let h2 = $.querySelector("h2");

function addNewTodo(newTodoValue) {
  let newLi = $.createElement("li");
  newLi.classList.add("list-item");

  let parag = $.createElement("p");
  parag.id = "parag";
  parag.innerHTML = newTodoValue;

  let i = $.createElement("i");
  i.className = "fa fa-remove";
  newLi.append(parag, i);

  itemContainer.append(newLi);
  newLi.style.display = "flex";
  input.value = "";

  i.addEventListener("click", function () {
    newLi.remove();
    if (itemContainer.childElementCount === 1) {
      h2.style.display = "block";
    } else {
      h2.style.display = "none";
    }
  });
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
});

input.addEventListener("keydown", function (event) {
  let newTodoValue = event.target.value.trim();

  if (newTodoValue && event.keyCode == 13) {
    addNewTodo(newTodoValue);
    h2.style.display = "none";
  }
});

// if ((newLi.style.display = "none")) {
//   h2.style.display = "none";
// }
c(itemContainer);
