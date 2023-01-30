console.log("Hello");

function Book(bookname, author, type) {

    this.bookname = bookname;
    this.author = author;
    this.type = type;
}


function Display() {

}

Display.prototype.add = function (book) {
    tableBody = document.getElementById('tableBody');
    let uistring =`
                <tr>
                    <td>${book.bookname}</td>
                    <td>${book.author}</td>
                    <td>${book.type}</td>
                </tr>`;

                tableBody.innerHTML += uistring;

}
Display.prototype.clear = function () {
    let libraryForm = document.getElementById('libraryForm');
    libraryForm.reset();
}


let libraryform = document.getElementById('LibraryForm');
libraryform.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e) {
    console.log("Form submitted");


    let bookname = document.getElementById('bookName').value;
    let author = document.getElementById('authorName').value;
    let type;

    let programming = document.getElementById('Programming');
    let novels = document.getElementById('Novels');
    let storybooks = document.getElementById('StoryBooks');

    if (programming.checked) {
        type = programming.value;
    }
    else if (novels.checked) {
        type = novels.value;
    }
    else if (storybooks.checked) {
        type = storybooks.value;
    }
    let book = new Book(bookname, author, type);
    console.log(book);

    let display = new Display();
    display.add(book);
    
    e.preventDefault();

}