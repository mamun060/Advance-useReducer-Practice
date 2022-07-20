import React from 'react';
import './App.css';
import ComponentB from './GlobalState/ComponentB';
import CounterReducer from './GlobalState/CounterReducer';
import GetPost from './GlobalState/GetPost';
import ComplexCounter from './useReducers/ComplexCounter';
import ComplexCounter2 from './useReducers/ComplexCounter2';
import ComplexCounter3 from './useReducers/ComplexCounter3';
import Counter from './useReducers/Counter';
import Counter2 from './useReducers/Counter2';
import MultipleUseReducer from './useReducers/MultipleUseReducer';
// import BookList from './Components/BookList';
// import BooksProvider from './Components/BooksProvider';
// import BusList from './Components/BusList';
// import CycleList from './Components/CycleList';
// import BusListProvder from './Context/BusListProvder';
// import Cyclist from './Context/Cyclist';

function App() {
  return (
    <div className="App">
      {/* <BooksProvider >
          <BookList />
      </BooksProvider>
      <Cyclist >
          <CycleList />
      </Cyclist>
      <BusListProvder>
        <BusList />
      </BusListProvder> */}

      {/* <Counter />
      <Counter2 /> */}

      {/* <ComplexCounter />
      <ComplexCounter2 />
      <ComplexCounter3 /> */}

      {/* <MultipleUseReducer /> */}

      <CounterReducer />
      <ComponentB />

      <GetPost />

    </div>
  );
}

export default App;
