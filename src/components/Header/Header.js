import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './Header.css';
import updateResult from '../../redux/Actions/updateResult';
import { OPTIONS } from '../../API';

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [navInput, setNavInput] = useState('');
    const [navPlaceholder, setNavPlaceholder] = useState('Search');
    const handleClickNavSearch = () => {
        fetch(`https://api.themoviedb.org/3/search/movie?query=${navInput}&include_adult=true&language=en-US&page=1`, OPTIONS)
            .then(response => response.json())
            .then(data => dispatch(updateResult({ ...data, title: 'Search results', input: navInput })))
            .catch(err => console.error(err));
        setNavPlaceholder(navInput);
        setNavInput('');
        navigate('/result');
    }
    return (
        <header>
            <nav>
                <button onClick={() => navigate('/')}><h2>Home</h2></button>
                <div id='navSearch'>
                    <input placeholder={navPlaceholder} 
                    onKeyDown={(e) => e.key === 'Enter' && handleClickNavSearch()}
                    onChange={e => setNavInput(e.target.value)} value={navInput}></input>
                    <button onClick={() => handleClickNavSearch()}><strong>Search</strong></button>
                </div>
            </nav>
        </header>
    )
}

export default Header;