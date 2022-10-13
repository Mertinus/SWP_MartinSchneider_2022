var listData = [];

function FillTodoListFromArray() {
    console.log(listData);
    document.getElementById("todoList").innerHTML = "";
    listData.forEach(element => {
        document.getElementById("todoList").innerHTML += "<li>" + element + "</li>"; 
    })
}

document.getElementById("saveInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("storeTodo").click();
    }
  });

document.getElementById("storeTodo").addEventListener("click", function() {
    listData.push(document.getElementById("saveInput").value);
    FillTodoListFromArray();
});

document.getElementById("deleteNumber").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("deleteTodo").click();
    }
  });

document.getElementById("deleteTodo").addEventListener("click", function() {
    let deleteVal = parseInt(document.getElementById("deleteNumber").value) - 1;
    console.log(deleteVal);
    listData.splice(deleteVal, 1);
    FillTodoListFromArray();
});