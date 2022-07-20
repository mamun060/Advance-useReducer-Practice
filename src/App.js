import React from 'react';
import './App.css';
import BookList from './Components/BookList';
import BooksProvider from './Components/BooksProvider';
import BusList from './Components/BusList';
import CycleList from './Components/CycleList';
import BusListProvder from './Context/BusListProvder';
import Cyclist from './Context/Cyclist';

function App() {
  return (
    <div className="App">
      <BooksProvider >
          <BookList />
      </BooksProvider>
      <Cyclist >
          <CycleList />
      </Cyclist>
      <BusListProvder>
        <BusList />
      </BusListProvder>
    </div>
  );
}

export default App;
