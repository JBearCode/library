"use strict";

const form = document.getElementById("mainform");
form.addEventListener("submit", addBookToLibrary)

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
  console.log("addBookToLibrary ran");
}

function updateTable() {
  const bookTable = document.getElementById('booktable');

  for (let i = 0; i < myLibrary.length; i++) {
    bookTable += "<tr>"
    bookTable += "<td>" + myLibrary[i].title + "</td>"
    bookTable += "<td>" + myLibrary[i].author + "</td>"
    bookTable += "<td>" + myLibrary[i].pages + "</td>"
    bookTable += "<td>" + myLibrary[i].read + "</td>"
    bookTable += "<td>🗑️</td>"
    bookTable += "</tr>"
  }


}

