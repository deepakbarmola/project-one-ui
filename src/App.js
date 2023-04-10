import React, {setState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BookListComponent from './components/BookListComponent';

function App() {
  return (
 <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<BookListComponent/>}> </Route>
    </Routes>   
</BrowserRouter>
  );
}

export default App;
