const notesContainer = document.querySelector(" .notes-container");
const createBtn = document.querySelector(" .btn");

let notes = document.querySelectorAll(".input-box");


// when we close the browser then oprn browser it should check the local storage and if any data in localstorage
// it display the particular data as notes
function showNotes(){
    notesContainer.innerHTML= localStorage.getItem("notes");
}
showNotes();




// show whatever is written in notes container will stored in browser named notes
function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}




// add new notes
createBtn.addEventListener("click",()=>{
    let inputBox= document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "delete.png"
    notesContainer.appendChild(inputBox).appendChild(img);
})

// delete
notesContainer.addEventListener("click", function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateStorage();
    }
    else if(e.target.tagName === "P"){
notes = document.querySelectorAll(".input-box");
notes.forEach(notes=>{
    notes.onkeyup = function(){//The onkeyup event occurs when the user releases a key on the keyboard.
        updateStorage();
    }
})
    }
})



