import BookItem from "./BookItem";
const BooksList = ({ books }) => {
    return books.map(item => <BookItem key={item.id} {...item} />);
}

export default BooksList;