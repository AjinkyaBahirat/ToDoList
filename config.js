showListItem();
let addBtn = document.getElementById("btn");
addBtn.addEventListener("click", function(e) {
  let addTxt = document.getElementById("item");
  let notes = localStorage.getItem("ItemList");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.push(addTxt.value);
  localStorage.setItem("ItemList", JSON.stringify(notesObj));
  addTxt.value = "";
//   console.log(notesObj);
showListItem();
});

//for display

function showListItem(){
    let notes = localStorage.getItem("ItemList");
    if (notes == null) {
      notesObj = [];
    } else {
      notesObj = JSON.parse(notes);
    }
    let html = "";
  notesObj.forEach(function(element, index) {
    html += `
    <li class='list-group-item d-flex justify-content-between align-items-center'>${element}<button id='${index}'onclick="deleteNote(this.id)" class='btn btn-danger'>X</span></li><br>`;
  });
  let notesElm = document.getElementById("list");
  if (notesObj.length != 0) {
    notesElm.innerHTML = html;
  } else {
    notesElm.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
  }
}

function deleteNote(index) {
    //   console.log("I am deleting", index);
    
      let notes = localStorage.getItem("ItemList");
      if (notes == null) {
        notesObj = [];
      } else {
        notesObj = JSON.parse(notes);
      }
    
      notesObj.splice(index, 1);
      localStorage.setItem("ItemList", JSON.stringify(notesObj));
      showListItem();
    }
