import { useCallback, useState } from "react"
import { searchBooks } from "../../api/books.api";
import SearchBar from "./components/SearchBar";
import { Grid, Pagination } from "@mui/material"
import BooksList from "./components/BooksList/BooksList";

const ITEMS_PER_PAGE = 8;

const Books = () => {
    const [loading, setLoading] = useState(false);
    const [books, setBooks] = useState({});
    const [page, setPage] = useState(1);
    const [term, setTerm] = useState("");

    const handleSearchBooks = useCallback(async (term) => {
        setLoading(true);
        setTerm(term);
        const response = await searchBooks(term, 1);
        if (response && response.data && response.data.items) {
            setBooks(response.data);
            setPage(1);
        }
        setLoading(false);
    }, []);

    const handlePageChanged = useCallback(async (e, newPage) => {
        setPage(newPage);
        setLoading(true);
        const response = await searchBooks(term, newPage);
        if (response && response.data && response.data.items) {
            setBooks(response.data);
            setPage(newPage);
        }
        setLoading(false);
    }, [term]);

    return <Grid container spacing={3}>
        <Grid item xs={12}>
            <SearchBar searchBooks={handleSearchBooks} loading={loading} />
        </Grid>
        <Grid container item xs={12} spacing={3}>
            <BooksList books={books.items || []} />
        </Grid>
        {!loading && books && books.totalItems > 0 && <Grid item xs={12}>
            <Pagination count={Math.ceil(books.totalItems / ITEMS_PER_PAGE)} onChange={handlePageChanged} page={page} disabled={loading} />
        </Grid>}
    </Grid>
}

export default Books;