var listData = [];

function FillTodoListFromArray() {
    console.log(listData);
    document.getElementById("todoList").innerHTML = "";
    listData.forEach(element => {
      let isChecked = (element.isDone ? " checked" : " ");
      document.getElementById("todoList").innerHTML += "<li><input type='checkbox' class='taskCheckbox'"+isChecked+"/>" + 
        element.name + " - " + element.responsible + 
        " <button class='deleteItem'>X</button></li>"; 
    })

    var checkboxes = document.getElementsByClassName("taskCheckbox");
    for (let i = 0; i < checkboxes.length; i++) {
      checkboxes[i].addEventListener("change", function(event) {
        listData[i].isDone = !listData[i].isDone;
        console.log(listData[i].name + " - " + listData[i].isDone);
      });
    };
    
    var deleteItems = document.getElementsByClassName("deleteItem");
    for (let i = 0; i < deleteItems.length; i++) {
      deleteItems[i].addEventListener("click", function(event) {
        listData.splice(i, 1); 
        FillTodoListFromArray();
      });
    };
}

/*document.getElementById("saveInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("storeTodo").click();
    }
  });*/

document.getElementById("storeTodo").addEventListener("click", function() {
    let taskName = document.getElementById("saveInput").value;
    let personResponsible = document.getElementById("saveResponsible").value;
    let task = {name:taskName, responsible: personResponsible, isDone: false};
    listData.push(task);
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