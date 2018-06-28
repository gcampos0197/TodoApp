//Add list items
function addListItem(input) {
  console.log(input);
  if(input === ''){
    alert('Please enter a to do item.') //Good edge casing!! -RJH
  } else  {
    var li = document.createElement('li');
    var ul = document.getElementById('todo_list');
    var text = document.createTextNode(input);
    var editButton = document.createElement("button"); //Is there a reason you used var s instead of let s? -RJH
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
  if (deleteLi === true) { //In this case since you are just checking the truthy-ness you can just do if(deleteLi) {... And since this is just an if check, you can write it all in one line :) -RJH
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
          alert("Try again."); //Good edge casing -RJH
      } else { 
      let newChildInput = document.createTextNode(newInput);
      li.replaceChild(newChildInput, li.firstChild); //EXCELLENT use of Google and replaceChild!!! -RJH
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
