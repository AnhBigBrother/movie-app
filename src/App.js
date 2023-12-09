import { useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch } from "react-redux";
import './App.css';
import { OPTIONS } from './API';
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import HomePage from './pages/HomePage/HomePage.js';
import ResultPage from './pages/ResultPage/ResultPage.js';
import MovieDetailPage from './pages/MovieDetailPage/MovieDetailPage.js';
import SearchBar from './components/SearchBar/SearchBar.js';
import updatePopular from './redux/Actions/updatePopular.js';
import updateTopRated from './redux/Actions/updateTopRated.js';
import updateTrending from './redux/Actions/updateTrending.js';
import updateUpComming from './redux/Actions/updateUpComming.js';

const keyWolds = ['popular', 'top_rated', 'upcoming'];

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    Promise.all(keyWolds.map(keyWold =>
      fetch(`https://api.themoviedb.org/3/movie/${keyWold}?language=en-US&page=1`, OPTIONS)
        .then(resp => resp.json())
        .catch((err) => console.log(err))
    ))
      .then((data) => {
        dispatch(updatePopular(data[0]));
        dispatch(updateTopRated(data[1]));
        dispatch(updateUpComming(data[2]));
      });
    fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', OPTIONS)
      .then(res => res.json())
      .then(data => dispatch(updateTrending(data)))
      .catch(err => console.error(err));
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <SearchBar />
        <div id='bodyPage'>
          <Routes>
            <Route path='/' element={<HomePage />}></Route>
            <Route path='/result' element={<ResultPage />}></Route>
            <Route path='/detail' element={<MovieDetailPage />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
