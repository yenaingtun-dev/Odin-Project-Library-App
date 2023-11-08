class Book {
    constructor(title, author, read, not_read) {
        title, author, read, not_read;
    }
}

class Library {
    constructor() {
        this.books = [];
    }

    addBook(title, author, read, not_read) {
        const book = new Book(title, author, read, not_read);
        this.books.push(book);
    }

    displayBooks() {
        const bookList = document.getElementById('book-lists');
        bookList.innerHTML = '';

        this.books.forEach((book) => {
            const listItem = document.createElement('li');
            listItem.textContent = `Title: ${book.title}, Author: ${book.author}, Read: ${book.read}`;
            bookList.appendChild(listItem);
        });
    }
}

const myLibrary = new Library();
const bookForm = document.getElementById('book_form');

bookForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const titleInput = document.getElementById('title');
    const authorInput = document.getElementById('author');
    const readInput = document.getElementById('read');
    const not_readInput = document.getElementById('not_read');

    const title = titleInput.value;
    const author = authorInput.value;
    const read = readInput;
    const not_read = not_readInput;

    if (title && author) {
        myLibrary.addBook(title, author, read, not_read);
        myLibrary.displayBooks();
        titleInput.value = '';
        authorInput.value = '';
        readInput.value = '';
        not_readInput.value = '';
    }
});

myLibrary.displayBooks();

// const myLibrary = [];
// const form = document.getElementById('book_form');
// const dataTable = document.getElementById("data-table");

//form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const newBook = getBookFormInput()
//     library.addBook(newBook)
//     if (title !== '' && author !== '') {
//         if (read.checked) {
//             new Book(title, author, read.value);
//             // addBookToLibrary(title, author, read.value);
//         } else if (not_read.checked) {
//             addBookToLibrary(title, author, not_read.value);
//         }
//         form.reset();
//     } else {
//         console.log('need to fill the form');
//     }
// });

// function Book() {
//     const newRow = document.createElement("tr");
//     myLibrary.forEach(book => {
//         newRow.innerHTML = `
//             <td>${book.title}</td>
//             <td>${book.author}</td>
//             <td>${book.read}</td>
//         `;
//         dataTable.querySelector("tbody").appendChild(newRow);
//     });
// }

// function addBookToLibrary(title, author, read, not_read) {
//     const book = {
//         title,
//         author,
//         read,
//         not_read
//     }

//     myLibrary.push(book);
//     return Book();
// }