import React from 'react'
import { useContext } from 'react'
import { BookContext } from './BooksProvider';

const BookList = () => {
    const {books} = useContext(BookContext)
  return (
    <div>
        <ul>
           {books.map(book=>(
            <li key={book.id} style={{color:'black'}}>{book.title}</li>
           ))}
        </ul>
    </div>
  )
}

export default BookList