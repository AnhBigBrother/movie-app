import { useNavigate } from 'react-router-dom';
import './SearchBar.css';
import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { OPTIONS } from '../../API.js';
import updateResult from '../../redux/Actions/updateResult.js';

const SearchBar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [input, setInput] = useState('');
    const [placeholder, setPlaceholder] = useState('Search movie by name');

    const handleClickSearch = () => {
        fetch(`https://api.themoviedb.org/3/search/movie?query=${input}&include_adult=true&language=en-US&page=1`, OPTIONS)
            .then(response => response.json())
            .then(data => dispatch(updateResult({ ...data, title: 'Search results', input: input })))
            .catch(err => console.error(err));
        setPlaceholder(input);
        setInput('');
        navigate('/result');
    }
    return (
        <div id='head'>
            <h1>Well come to my</h1>
            <h1>Movie App</h1>
            <div id='searchBar'>
                <input placeholder={placeholder} value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleClickSearch()}></input>
                <button onClick={() => handleClickSearch()}><strong>Search</strong></button>
            </div>
        </div>
    )
}

export default SearchBar;