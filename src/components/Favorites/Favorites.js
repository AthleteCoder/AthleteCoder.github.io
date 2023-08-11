import { useEffect, useState } from "react";
import { getFavorites } from "../../utils/favorites.localStorage";
import { Grid, LinearProgress, Box, Alert, AlertTitle } from "@mui/material"
import BooksList from "../Books/components/BooksList/BooksList";
import { Link } from "react-router-dom";

const Favorites = () => {
    const [loading, setLoading] = useState(true);
    const [books, setBooks] = useState([]);

    useEffect(() => {
        setBooks(getFavorites());
        setLoading(false);
    }, []);

    if (loading) {
        return <Box sx={{ width: '100%' }}>
            <LinearProgress />
        </Box>
    }

    if (books.length === 0) {
        return <Alert severity="warning">
            <AlertTitle>Warning</AlertTitle>
            You currently have no favorites go back to add some! — <strong><Link to="/">Books</Link></strong>
        </Alert>
    }

    return <Grid container spacing={3}>
        <BooksList books={books} />
    </Grid>
}

export default Favorites;