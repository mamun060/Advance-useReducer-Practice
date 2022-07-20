import React, { createContext, useState } from 'react'

export const BookContext = createContext();

const BooksProvider = (props) => {
    const [books] = useState([
        {title: 'name of the wind', id:1},
        {title: 'name of the kings', id:2},
        {title: 'name of the empire', id:3},
        {title: 'name of the ages', id:4},
        {title: 'name of the apple', id:5},
    ]);

  return (
   <BookContext.Provider value={{books}}>
        {props.children}
   </BookContext.Provider>
  )
}

export default BooksProvider