"use strict";

let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(form) {
  let newBook = Book(form.booktitle.value, form.author.value, form.pages.value, form.read.value);
  myLibrary.push(newBook);
  console.log("addBookToLibrary ran");
}