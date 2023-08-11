import { useState, useEffect, useCallback } from 'react';
import { Grid, Typography, Button, CardMedia, CardContent, CardActions, Card, IconButton, Tooltip } from "@mui/material";
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import { addBookToFavorites, isFavorite } from '../../../../utils/favorites.localStorage';

export default function BookItem(props) {
    const [favorite, setFavorie] = useState(false);

    useEffect(() => {
        setFavorie(isFavorite(props.id));
    }, [props.id]);

    const handleFavoriteClick = useCallback(() => {
        setFavorie(prv => !prv);
        addBookToFavorites(props);
    }, [props])

    return (
        <Grid item xs={3}>
            <Card >
                <CardMedia
                    sx={{ height: 180, width: 130 }}
                    image={props?.volumeInfo?.imageLinks?.thumbnail}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props?.volumeInfo?.title}
                    </Typography>
                    <Typography variant="subtitle2" color="text.secondary">
                        Number of Pages {props?.volumeInfo?.pageCount}
                    </Typography>
                    <Typography variant="subtitle2" color="text.secondary">
                        Published on {props?.volumeInfo?.publishedDate}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" onClick={() => window.open(props?.volumeInfo?.infoLink)}>Learn More</Button>
                    <Tooltip title="Add/Remove from favorites">
                        <IconButton onClick={handleFavoriteClick}>
                            {favorite ? <Favorite /> : <FavoriteBorder />}
                        </IconButton>
                    </Tooltip>
                </CardActions>
            </Card>
        </Grid>
    );
}