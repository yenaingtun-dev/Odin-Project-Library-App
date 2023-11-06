const myLibrary = [];
const form = document.getElementById('book_form');
const dataTable = document.getElementById("data-table");

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.getElementById('title').value
    const author = document.getElementById('author').value
    const read = document.getElementById('read')
    const not_read = document.getElementById('not_read')
    if (title !== '' && author !== '') {
        if (read.checked) {
            addBookToLibrary(title, author, read.value);
        } else if (not_read.checked) {
            addBookToLibrary(title, author, not_read.value);
        }
        form.reset();
    } else {
        console.log('need to fill the form');
    }

});

function Book() {
    const newRow = document.createElement("tr");
    myLibrary.forEach(book => {
        newRow.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.read}</td>
        `;
        dataTable.querySelector("tbody").appendChild(newRow);
    });
}

function addBookToLibrary(title, author, read, not_read) {
    const book = {
        title,
        author,
        read,
        not_read
    }

    myLibrary.push(book);
    return Book();
}