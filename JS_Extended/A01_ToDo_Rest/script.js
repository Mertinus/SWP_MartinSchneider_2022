document.getElementById('loadTodo').addEventListener('click', function(){
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log(data);
      todoData = data;
      todoData.forEach(element => {
        document.getElementById('todoList').innerHTML += "<li>" + element.title + "</li>";
      });
    })
    .catch(function(error) {
      console.log(error);
    });
});

