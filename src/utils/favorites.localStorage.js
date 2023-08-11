export function addBookToFavorites(book) {
    let books = JSON.parse(localStorage.getItem("favorites"));
    if (books) {
        let index = books.findIndex(item => item.id === book.id);
        if (index > -1) {
            books.splice(index, 1);
        } else {
            books.push(book);
        }
    } else {
        books = [book];
    }
    localStorage.setItem("favorites", JSON.stringify(books));
}

export function isFavorite(bookID) {
    let books = JSON.parse(localStorage.getItem("favorites"));
    if (!books) return false;
    return books.findIndex(bookColl => bookID === bookColl.id) > -1
}

export function getFavorites() {
    let books = JSON.parse(localStorage.getItem("favorites"));
    return books || []
}