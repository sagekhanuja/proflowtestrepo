function displayTodoData() {
  const endpoint = "https://jsonplaceholder.typicode.com/todos/1";
  fetch(endpoint)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const table = document.getElementById("todo-table");
      const row = table.insertRow();
      const userIdCell = row.insertCell(0);
      const idCell = row.insertCell(1);
      const titleCell = row.insertCell(2);
      const completedCell = row.insertCell(3);
      userIdCell.innerHTML = data.userId;
      idCell.innerHTML = data.id;
      titleCell.innerHTML = data.title;
      completedCell.innerHTML = data.completed;
    });
}

window.addEventListener("load", function () {
  displayTodoData();
  console.log("window loaded");
});

document.getElementById("test-button").addEventListener("click", function () {
  console.log("button clicked");
});
