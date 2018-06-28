//Add list items
function addListItem(input) {
  console.log(input);
  if(input === ''){
    alert('Please enter a to do item.')
  } else {
    var li = document.createElement('li');
    var ul = document.getElementById('todo_list');
    var text = document.createTextNode(input);
    var editButton = document.createElement("button");
    editButton.innerHTML = "Edit";
    editButton.className = 'editButton';
    editButton.onclick = editItem;
    var deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    deleteButton.className = 'deleteButton';
    deleteButton.onclick = deleteItem;
    ul.appendChild(li);
    li.appendChild(text);
    li.appendChild(deleteButton);
    li.appendChild(editButton);
    document.forms.todoform.reset();
  }
}

var addBtn = document.getElementById('add_btn');

addBtn.addEventListener('click', function (event) {
  event.preventDefault();
  console.log(document.getElementById('user_input').value)
  addListItem(document.getElementById('user_input').value);
});


//Delete list item
 function deleteItem(event) {
  let li = event.target.parentNode;
  let deleteLi = confirm("Are you sure you want to delete this item?");
  if (deleteLi === true) {
      li.parentNode.removeChild(li);
    }
}

//Edit list item
function editItem(event) {
  let li = event.target.parentNode;
  let ul = li.parentNode;
  let newInput = prompt("Edit this item:");
  console.log('value',li.firstChild)
  if (newInput === '') {
          alert("Try again.");
      } else {
      let newChildInput = document.createTextNode(newInput);
      li.replaceChild(newChildInput, li.firstChild);
      }
}

//Strike item to mark as complete
var userInput = document.querySelector('ul');
userInput.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('strike');
  }
}, false);

//Add item to list by clicking "enter"
document.getElementById("user_input").addEventListener("keyup", function(event) {
if (event.keyCode === 13) {
    document.getElementById("addBtn").click();
    }
});
