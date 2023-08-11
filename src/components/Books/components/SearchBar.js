import { useContext, useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import { AuthenticationContext } from '../../../context/Authentication';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { useHistory } from 'react-router-dom';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

const SearchBar = ({ searchBooks, loading }) => {
    const { user } = useContext(AuthenticationContext);
    const [search, setSearch] = useState("");
    let history = useHistory();
    const handleSearchChange = (e) => {
        setSearch(e.target.value)
    }

    const handleSearch = () => {
        if (search) {
            searchBooks(search)
        }
    }
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color="transparent">
                <Toolbar>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                    >
                        Search Books
                    </Typography>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                            value={search}
                            onChange={handleSearchChange}
                        />
                    </Search>
                    <Button variant="outlined" onClick={handleSearch} disabled={loading}>{loading ? "loading..." : "Search"}</Button>
                    <Button variant='outlined' onClick={() => history.replace("/favorites")}>Favorites</Button>
                    <Box sx={{ flexGrow: 1 }}></Box>
                    <Typography>{user}</Typography>
                    <AccountCircle />
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default SearchBar;