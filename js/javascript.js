function toDo() {
  this.todo = document.createElement("div");
  this.span = document.createElement("span");
  this.button = document.createElement("button");
  this.doneButton = document.createElement("button");

  this.createToDo = function () {
    if (document.getElementById('input-text').value === "") {
  }else{
    this.todo.setAttribute("class", "todo");
    document.getElementById("todo-container").appendChild(this.todo);
    this.span.innerHTML = document.getElementById("input-text").value;
    this.span.setAttribute("id", "todo-text");
    this.button.setAttribute("onclick","remove(this)");
    this.button.setAttribute("id", "todo-remove-button");
    this.button.setAttribute("type", "button");
    this.button.innerHTML = "-";
    this.doneButton.setAttribute("onclick","done(this)");
    this.doneButton.setAttribute("id", "todo-done-button");
    this.doneButton.setAttribute("type", "button");
    this.doneButton.innerHTML = "do";
    this.todo.appendChild(this.span);
    this.todo.appendChild(this.button);
    this.todo.appendChild(this.doneButton);
  }
  }
}

var todoarray = [];
function create() {
  todoarray.push(new toDo());
  todoarray[todoarray.length-1].createToDo();
}

function remove(button) {
  document.getElementById("todo-container").removeChild(button.parentElement);
}

function hide(x) {
  document.getElementById(x).classList.add("hide");
}

function show(x) {
  document.getElementById(x).classList.remove("hide");
}

function done(button) {
  button.parentElement.classList.toggle("done");
  if (button.innerHTML == "do") {
    button.innerHTML = "undo";
  }else{

    button.innerHTML = "do";
  }
}

function nightmode() {
  document.getElementsByClassName('index-body')[0].classList.toggle("background-black");
  document.getElementById('profile-body').classList.toggle("background-black");
  document.getElementById('about-body').classList.toggle("background-black");
  document.getElementById('settings-body').classList.toggle("background-black");
}
