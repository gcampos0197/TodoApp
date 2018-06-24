
// // edit button
// var edit = document.getElementsByClassName("edit");
// var i;
// for (i = 0; i < edit.length; i++) {
//   edit[i].onclick = function() {
//     var divEdit = this.parentElement;
//     divEdit.style.display = "none";
//   }
// }
//
//
// function editTodoItem(event) {
//     let inputValue = document.getElementById("myInput").value;
//     let newInputValue = prompt("Change List Item:", inputValue);
//     if (newInputValue == inputValue) {
//       alert('No change were made');
//     } else if (newInputValue == '') {//Excellent edge casing!
//         alert("You didn't type anything!");
//     } else {
//       let node = event.target.parentNode;
//       node.parentNode.innerHTML = '<h2 id="paraTag" class="h2tag">' + newInputValue + '</h2> <div class="bottom-nav"> <button id="edit" onclick="editTodoItem(event)" class="btn btnBig">Edit</button> <button onClick="deleteTodoItem(event)" class="btn btnBig">Delete</button> <label class="switch"> <input type="checkbox" onclick="checkOffTodoItem(event)"> <span class="slider round"></span> </label> </div>';
//     };
// };

// // edit button
// function editTodoItem(event) {
//     let inputValue = document.getElementById("input").value;
//     let newInputValue = prompt("Change List Item:", inputValue);
//     if (newInputValue == inputValue) {
//       alert('No change were made');
//     } else if (newInputValue == '') {
//         alert("You didn't type anything!");
//     } else {
//       let node = event.target.parentNode;
//       node.parentNode.innerHTML = '<h2 id="paraTag" class="h2tag">' + newInputValue + '</h2> <div class="bottom-nav"><button id="edit" onclick="editTodoItem(event)" class="btn btnBig">Edit</button> <button onClick="deleteTodoItem(event)" class="btn btnBig">Delete</button> <label class="switch"> <input type="checkbox" onclick="checkOffTodoItem(event)"> <span class="slider round"></span> </label> </div>';
//     };
// };


//Add list items
function addListItem(input) {
  console.log(input);
  if(input === ''){
    alert('Please enter a to-do item.')
  } else {
    var li = document.createElement('li');
    var ul = document.getElementById('todo_list');
    var text = document.createTextNode(input);
    var deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    deleteButton.className = 'deleteButton';
    deleteButton.onclick = deleteItem;
    var editButton = document.createElement("button");
    editButton.innerHTML = "Edit";
    editButton.className = 'editButton';
    editButton.onclick = editItem;
    ul.appendChild(li);
    li.appendChild(text);
    li.appendChild(editButton);
    li.appendChild(deleteButton);
    document.forms.todoform.reset();
    // li.appendChild()
  }
}

//Call Add Item Button
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
var complete = document.querySelector('ul');
complete.addEventListener('click', function(event) {
  if (event.target.tagName === 'LI') {
    console.log(event.target.classList.toggle('checked'))
    event.target.classList.toggle('checked');
  }
}, false);

//Add item by clicking "enter"
document.getElementById("user_input").addEventListener("keyup", function(event) {
if (event.keyCode === 13) {
    document.getElementById("addBtn").click();
    }
});
