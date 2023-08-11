import axios from "axios";

const URL = "https://www.googleapis.com/books/v1/volumes";
const ITEMS_PER_PAGE = 8;

export function searchBooks(search, page = 1) {
    return axios.get(`${URL}?q=${search}&startIndex=${(page - 1) * ITEMS_PER_PAGE}&maxResults=${ITEMS_PER_PAGE}`);
}