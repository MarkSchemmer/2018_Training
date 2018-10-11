import axios from 'axios'

const url = 'http://localhost:3001/port/api/authors'
const authorByIdUrl = (id) => `http://localhost:3001/port/api/authors/${id}`

let createAuthor = (obj) => {
   return  axios.post(url,obj)
}

let updateAuthor = (id, obj) => {
   return axios.patch(authorByIdUrl(id), obj)
}

let getAllAuthors = () => axios.get(url)

let deleteAuthor = (id) => axios.delete(authorByIdUrl(id))

let getAuthorById = (id) => axios.get(authorByIdUrl(id))


export { createAuthor, 
         getAllAuthors, deleteAuthor,
         getAuthorById, updateAuthor }