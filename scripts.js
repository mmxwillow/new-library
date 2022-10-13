const main = document.querySelector('main');

let myLibrary = [];

function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

function addBook(book) {
    myLibrary.push(book);
}

function displayBooks() {
    for (let i = 0; i < myLibrary.length; i++) {
        const card = document.createElement('div');
        const data = document.createElement('div');
        const title = document.createElement('div');
        const author = document.createElement('div');
        const pages = document.createElement('div');
        const icons = document.createElement('div');

        card.classList.add('card');
        data.classList.add('data');
        title.classList.add('title');
        author.classList.add('author');
        pages.classList.add('pages');
        icons.classList.add('icons');


        title.innerHTML = myLibrary[i].title;
        author.innerHTML = myLibrary[i].author;
        pages.innerHTML = myLibrary[i].pages;

        icons.innerHTML = '<svg class="is-read" style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="currentColor" d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z" /></svg><svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="currentColor" d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" /></svg>';

        data.appendChild(title);
        data.appendChild(author);
        data.appendChild(pages);

        card.appendChild(data);
        card.appendChild(icons);

        main.appendChild(card);
    }
}

const inSearch = new Book('In Search of Lost Time', 'Marcel Proust', '4,215', false);
addBook(inSearch);
displayBooks();

