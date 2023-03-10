import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AddMovie from './pages/AddMovie';
import EditMovie from './pages/EditMovie';
import Search from './pages/Search';
import Error from './pages/Error';

function App() {
  return (
    <div className="App">
      <Header />
      <div id="main">
        <Routes>
          <Route path='/' element={<Home />} ></Route>
          <Route path='/addmovie' element={<AddMovie />} ></Route>
          <Route path='/updatemovie/:id' element={<EditMovie />} ></Route>
          <Route path='/search' element={<Search />} ></Route>
          <Route path='*' element={ <Error /> }  ></Route>
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
