let myLibrary = [];

function Book(name,author,pages,isRead){
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

function addBook(book){
    myLibrary.push(book);
}

