import Header from "./components/header";
import Home from "./components/home";
import apiActions from "./api/api-actions";
import Value from "./components/Value";
import ToDos from "./components/ToDos";
import "../css/style.css";

pageBuild();

function pageBuild() {
  header();
  navHome();
  navValues();
  navToDos();
}

function header() {
  const header = document.getElementById("header");
  header.innerHTML = Header();
}

function navHome() {
  const homeButton = document.querySelector(".nav__home");
  homeButton.addEventListener("click", function() {
    document.querySelector("#app").innerHTML = Home();
  });
}

function navValues() {
  const valuesButton = document.querySelector(".nav__values");
  valuesButton.addEventListener("click", function() {
    apiActions.getRequest("https://localhost:44326/api/values", values => {
      document.querySelector("#app").innerHTML = Value(values);
    });
  });
}

function navToDos() {
  const todosButton = document.querySelector(".nav__todos");
  todosButton.addEventListener("click", function() {
    apiActions.getRequest("https://localhost:44326/api/todos", todos => {
      document.querySelector("#app").innerHTML = ToDos(todos);
    });
  });

  document.querySelector("#app").addEventListener("click", function() {
    if (event.target.classList.contains("add-todo__submit")) {
      const todo = event.target.parentElement.querySelector(
        ".add-todo__todoname"
      ).value;
      const data = {
        id: 0,
        item: todo
      };
      apiActions.postRequest(
        "https://localhost:44326/api/todos",
        data,
        todos => {
          document.querySelector("#app").innerHTML = ToDos(todos);
        }
      );
    }
  });
}

// function submitToDo(){
//   const submitButton = document.querySelector(".add-todo__submit");
//   submitButton.addEventListener("click", function(){
//       const todo = event.target.parentElement.querySelector('.add-todo__todoname').value;
//       apiActions.postRequest("https://localhost:44326/api/todos", todo, todos => {
//         document.querySelector('#app').innerHTML = ToDos(todos);
//       })
//   })
// }
