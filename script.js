"use strict";

const form = document.getElementById("mainform");
form.addEventListener("submit", addBookToLibrary)

let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(e) {
  e.preventDefault();
  const title = document.getElementById('booktitle').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  const alreadyRead = document.getElementById('alreadyread').checked;
  console.log("addBookToLibrary ran");
  return new Book(title, author, pages, alreadyRead);
}