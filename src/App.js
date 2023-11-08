import { element, render } from "./view/html-util.js";
export class App {
     mount() {
         const formElement = document.querySelector("#js-form");
         const inputElement = document.querySelector("#js-form-input");
         const containerElement = document.querySelector("#js-todo-list");
         const todoItemCountElement = document.querySelector("#js-todo-count");
         //List element that summarizes the todo list
         const todoListElement = element`<ul></ul>`;
         // Number of todo items
         let todoItemCount = 0;
         formElement.addEventListener("submit", (event) => {
             //Stop the original submit event
             event.preventDefault();
             // Create an element (li element) for the Todo item to be added
             const todoItemElement = element`<li>${inputElement.value}</li>`;
             // Add todo items to todoListElement
             todoListElement.appendChild(todoItemElement);
             // Overwrite the contents of the container element with the List element that summarizes the todo list
             render(todoListElement, containerElement);
             // Add 1 to the number of Todo items and update the displayed text
             todoItemCount += 1;
             todoItemCountElement.textContent = `Todo item count: ${todoItemCount}`;
             //Reset the input field to an empty string
             inputElement.value = "";
         });
     }
}