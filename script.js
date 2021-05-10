"use strict";

const bookTable = document.getElementById('booktable');

const form = document.getElementById("mainform");
form.addEventListener("submit", addBookToLibrary);

let myLibrary = [];
let idCounter = 0;

function Book(title, author, pages, read, id) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.id = id;
}

function addBookToLibrary(e) {
  e.preventDefault();
  const title = document.getElementById('booktitle').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  const alreadyRead = document.getElementById('alreadyread').checked;
  myLibrary.push(new Book(title, author, pages, alreadyRead, idCounter++));
  updateTable();
  form.reset();
}

function updateTable() {
  const jsTable = document.getElementById('js-table');
  jsTable.innerHTML = "";

  for (let i = 0; i < myLibrary.length; i++) {
    let newRow = jsTable.insertRow(-1);

    let titleCell = newRow.insertCell(-1);
    let titleText = document.createTextNode(myLibrary[i].title);
    titleCell.appendChild(titleText);

    let authorCell = newRow.insertCell(-1);
    let authorText = document.createTextNode(myLibrary[i].author);
    authorCell.appendChild(authorText);

    let pagesCell = newRow.insertCell(-1);
    let pagesText = document.createTextNode(myLibrary[i].pages);
    pagesCell.appendChild(pagesText);

    let readCell = newRow.insertCell(-1);
    if (myLibrary[i].read == false) {
        readCell.innerHTML = '<button type="button" class="read-unread-button">❌</button>'
    } else {
        readCell.innerHTML = '<button type="button" class="read-unread-button">✔️</button>'
    }
    
    let deleteCell = newRow.insertCell(-1);
    deleteCell.innerHTML = '<button type="button" class="delete-button">🗑️</button>'
  }
}

bookTable.addEventListener("click", readOrDelete);

function readOrDelete(e) {
    console.log(e);
    if (e.target.innerHTML == '🗑️') {
        // find clicked book, then delete in myLibrary
        console.log("trash can!");
    }
    if (e.target.classList.contains("read-unread-button")) {
        // write function to toggle read-unread for clicked book
        console.log("Read or unread?");
    }
    updateTable();
}
