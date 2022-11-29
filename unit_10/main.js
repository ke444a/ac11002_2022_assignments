let inputTask = document.getElementById("inputTask"),
  addItemBtn = document.getElementById("addItemBtn"),
  deleteItemsBtn = document.getElementById("deleteItemsBtn"),
  toDoContainer = document.getElementById("toDoContainer"),
  completedContainer = document.getElementById("completedContainer");

window.onload = function() {
  updateToDoList();
  updateCompletedToDoList();
}

addItemBtn.addEventListener("click", (event) => {
  event.preventDefault();
  addItemToList();
});

deleteItemsBtn.addEventListener("click", (event) => {
  event.preventDefault();
  deleteCompletedItems();
});

function showNothingToDo() {
    toDoContainer.innerHTML = `
    <div class="col-12 border border-light border-3 px-3 py-2">
        <p class="mb-0"><i class="fa-solid fa-thumbs-up pe-2"></i>There is nothing to do...</p>
    </div>`;
}

function showNothingCompleted() {
    completedContainer.innerHTML = `
    <div class="col-12 border border-light border-3 px-3 py-2">
        <p class="mb-0"><i class="fa-solid fa-hourglass pe-2"></i>Better get things done...</p>
    </div>`;
}

function updateToDoList() {
  let toDoList = localStorage.getItem("toDoList");

  if (toDoList === null) {
    localStorage.setItem("toDoList", JSON.stringify([]));
    showNothingToDo();
  } else if (toDoList === "[]") {
    showNothingToDo();
  } 
  else {
    toDoContainer.innerHTML = "";
    toDoList = JSON.parse(toDoList);
    toDoList.forEach((item, index) => {
      toDoContainer.innerHTML += `
                <div onClick='makeItemCompleted(${index})' id="item-${index}" class="col-12 bg-warning border border-light border-2 px-3 py-2 mb-1">
                    <p class="mb-0"><i class="fa-solid fa-exclamation pe-2"></i>${item}</p>
                </div>
            `;
    });
  }
}

function updateCompletedToDoList() {
  let completedList = localStorage.getItem("completedItems");

  if (completedList === null) {
    localStorage.setItem("completedItems", JSON.stringify([]));
    showNothingCompleted();
  } else if (completedList === "[]") {
    showNothingCompleted();
  } 
  else {
    completedContainer.innerHTML = "";
    completedList = JSON.parse(completedList);
    completedList.forEach((item, index) => {
      completedContainer.innerHTML += `
                <div class="col-12 bg-light border border-danger border-2 px-3 py-2 mb-1">
                    <p class="mb-0 text-dark"><i class="fa-solid fa-exclamation pe-2"></i>${item}</p>
                </div>
            `;
    });
  }}

function addItemToList() {
    let toDoList = JSON.parse(localStorage.getItem("toDoList"));
    toDoList.push(inputTask.value);
    localStorage.setItem("toDoList", JSON.stringify(toDoList));
    updateToDoList();
}

function deleteCompletedItems() {
  localStorage.removeItem("completedItems");
  updateCompletedToDoList();
}

function makeItemCompleted(indexToDelete) {
  let toDoList = JSON.parse(localStorage.getItem("toDoList")),
    completedList = JSON.parse(localStorage.getItem("completedItems"));
  completedList.push(toDoList[indexToDelete]);
  toDoList = toDoList.filter((item, index) => {
      return index != indexToDelete;
  })
  localStorage.setItem("toDoList", JSON.stringify(toDoList));
  localStorage.setItem("completedItems", JSON.stringify(completedList));
  updateToDoList();
  updateCompletedToDoList();
}