import axios from "axios";

const URL = 'http://localhost:3001/books'

export function getAllBooks () {
  return axios.get(URL); 
}




