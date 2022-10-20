const main = document.querySelector('main');
const open = document.querySelector('#add-book');
const close = document.querySelector('#close');
const form = document.querySelector('form');
const cover = document.querySelector('.cover');
const submit = document.querySelector('#submit');

close.addEventListener('click', closeForm);
cover.addEventListener('click', closeForm);

open.addEventListener('click', () =>{
    form.style.visibility="visible";
    cover.style.visibility="visible";
});

document.addEventListener('DOMContentLoaded', () => {
    submit.addEventListener('click', (ev) => {
        ev.preventDefault();
        const title = document.querySelector('input[name="title"]').value;
        const author = document.querySelector('input[name="author"]').value;
        const pages = document.querySelector('input[name="pages"]').value;
        const isRead = document.querySelector('input[type="checkbox"]').checked;
    
        const newBook = new Book(title,author,pages,isRead);
        addBook(newBook);
        displayBooks();
        closeForm();
    });
});

document.querySelector('#close-menu').addEventListener('click', () => {
    document.querySelector('.mobile-menu').classList.remove('visible');
});

document.querySelector('#open-menu').addEventListener('click', () => {
    document.querySelector('.mobile-menu').classList.add('visible');
});

function closeForm(){
    form.style.visibility="hidden";
    cover.style.visibility="hidden";
    form.reset();
}

let myLibrary = [];

class Book{
    constructor(title, author, pages, isRead) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isRead = isRead;
    }
    changeStatus(){
        this.isRead = !this.isRead;
    }
}

function addBook(book) {
    myLibrary.push(book);
}

function displayBooks() {
    main.innerHTML = "";
    
    for (let i = 0; i < myLibrary.length; i++) {
        const card = document.createElement('div');
        const data = document.createElement('div');
        const title = document.createElement('div');
        const author = document.createElement('div');
        const pages = document.createElement('div');
        const icons = document.createElement('div');
        const readStatus = document.createElement('button');
        const removeBook = document.createElement('button');

        card.id = i;

        card.classList.add('card');
        data.classList.add('data');
        title.classList.add('title');
        author.classList.add('author');
        pages.classList.add('pages');
        icons.classList.add('icons');
        readStatus.classList.add('readStatus');
        removeBook.classList.add('removeBook');

        if(myLibrary[i].isRead) readStatus.classList.add('read');

        title.innerHTML = myLibrary[i].title;
        author.innerHTML = myLibrary[i].author;
        pages.innerHTML = myLibrary[i].pages + " pages";
        readStatus.innerHTML = '<svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="currentColor" d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z" /></svg>';
        removeBook.innerHTML = '<svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="currentColor" d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" /></svg>';

        data.appendChild(title);
        data.appendChild(author);
        data.appendChild(pages);

        icons.appendChild(readStatus);
        icons.appendChild(removeBook);

        card.appendChild(data);
        card.appendChild(icons);

        main.appendChild(card);

        readStatus.addEventListener('click', myLibrary[i].changeStatus.bind(myLibrary[i]));
        readStatus.addEventListener('click', (e) => {
            e.currentTarget.classList.toggle('read');
        });

        removeBook.addEventListener('click', (e) => {
            let cardToRemove = e.currentTarget.parentNode.parentNode;
            myLibrary.splice(i, 1);
            cardToRemove.remove();
        })
    }
}

const inSearch = new Book('In Search of Lost Time', 'Marcel Proust', '4,215', true);
const mobyDick = new Book('Moby Dick', 'Herman Melville', '635', false);
addBook(inSearch);
addBook(mobyDick);
displayBooks();

