// To do list prepared by Lictor Torres as part of Problem 0 of CS50M

// CSS classes
const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

//Getting HTML nodes information
const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

//Setting parameters for new nodes to be created each time a to do is added to the list
var checkbox = "checkbox";
var deletetodofunction = "deleteTodo(id)";
var uncheckedCountFunction = "uncheckedCountF()";

//To do list item counter
let itemCount = 0;

//Unchecked to do list counter
let uncheckedCount = 0;

//to do list item text initialization
var todo = " ";

//Main function called when a to do item need to be added
function newTodo() {
  //alert('New TODO button clicked!')
  var todos = prompt("Include a to do item")
    if (todos != null){
      //Creating a new DIV HTML element for the new to do list
      const divAdd = document.createElement("div");
      divAdd.setAttribute("id",itemCount);
      divAdd.setAttribute("class",classNames.TODO_TEXT);

      //Creating a new label HTML element for the new to do list associated to the delete to do button
      const todoItem = document.createElement("label");
      todoItem.innerHTML = todos;
      todoItem.setAttribute("for",itemCount);
      todoItem.setAttribute("class",classNames.TODO_TEXT);

      //Creating a new button HTML element for the new to do list that allows to delete the to do item
      const deletetodo = document.createElement("button");
      deletetodo.innerHTML = "Delete";
      deletetodo.setAttribute("onclick",deletetodofunction);
      deletetodo.setAttribute("class",classNames.TODO_DELETE);
      deletetodo.setAttribute("id",itemCount);

      //Creating a new check mark input HTML element for the new to do list that allows it to be checked
      const inputtodo = document.createElement("input");
      inputtodo.setAttribute("onchange",uncheckedCountFunction);
      inputtodo.setAttribute("class",classNames.TODO_CHECKBOX);
      inputtodo.setAttribute("type",checkbox);
      inputtodo.setAttribute("id",itemCount);


      //Appending childs to UL parent node in order to create a to do list item
      list.appendChild(divAdd);
      divAdd.appendChild(inputtodo);
      divAdd.appendChild(todoItem);
      divAdd.appendChild(deletetodo);

      //calculating number of to do items and unchecked
      uncheckedCountF();
      item();
    }
}

function item(){
  //add one to the count of to do items
  itemCount = itemCount + 1
  document.getElementById("item-count").innerHTML = itemCount;
  return itemCount;
}

function deleteTodo(id){
  //console.log(id);
  //Delete the div to do item node and all children
  var item = document.getElementById(id);
  item.parentNode.removeChild(item);
  //Substracts one to the to do item count
  if (itemCount > 0) {
    itemCount = itemCount - 1
  }
  document.getElementById("item-count").innerHTML = itemCount;
  //Substracts one to the checked´s to do item count
  uncheckedCountF();
}

//Unchecked and checked function for every to do item
function uncheckedCountF(){
  const currentCheckBox = document.getElementById('itemCount');
  //console.log(currentCheckBox);
  const unchecked = document.querySelector('#todo-list');

  //Counts the number of input type HTML elements in order to get the number of checked inputs
  const testunchecked = unchecked.querySelectorAll('input[type="checkbox"]').length;
  //console.log(testchecked);

  //Counts the number of input type HTML elements in order to get the number inputs. It leads to the unchecked and checked inputs
  const checked = document.querySelector('#todo-list');
  const testchecked = checked.querySelectorAll('input[type="checkbox"]:checked').length;
  //console.log(testunchecked);

  document.getElementById("unchecked-count").innerHTML = (testunchecked - testchecked);
  //for class: document.querySelector(".ClassName")
  // for id document.querySelector("#ID")
}