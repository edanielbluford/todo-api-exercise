import imgTodo from "~/img/img_todo.jpg";
import imgTodos from "~img/*";

export default function ToDo(todos) {
  return `
        <img src=${imgTodo}>
        <ol>
            ${todos
              .map(todo => {
                return `
                <li>
                    <h3>${todo.item}</h3>
                    <img src=${imgTodos}/>
                </li>
                `;
              })
              .join("")}
        </ol>

        <section class="add-todo">
            <input class="add-todo__todoname" type="text" placeholder="Add a todo!">
            <button class="add-todo__submit">Submit</button>
        </section>
    `;
}
