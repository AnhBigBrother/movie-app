import { useDispatch, useSelector } from 'react-redux';
import './ResultPage.css';
import Tag from '../../components/Tag/Tag.js';
import { OPTIONS } from '../../API.js';
import updateResult from '../../redux/Actions/updateResult.js';


const ResultPage = () => {
    const result = useSelector(store => store.result);
    const dispatch = useDispatch();
    const handlePreviousPage = () => {
        let type = '';
        if (result.title === 'Search results') {
            fetch(`https://api.themoviedb.org/3/search/movie?query=${result.input}&include_adult=true&language=en-US&page=${(result.page - 1)}`, OPTIONS)
                .then(res => res.json())
                .then(data => dispatch(updateResult({ ...data, title: result.title, input: result.input })))
                .catch(err => console.log(err));
        }
        else {
            if (result.title === 'Popular') { type = 'popular' }
            else if (result.title === 'Top rated') { type = 'top_rated' }
            else if (result.title === 'Up coming') { type = 'upcoming' }
            fetch(`https://api.themoviedb.org/3/movie/${type}?language=en-US&page=${(result.page - 1)}`, OPTIONS)
                .then(res => res.json())
                .then(data => dispatch(updateResult({ ...data, title: result.title })))
                .catch(err => console.log(err));
        }
    }
    const handleNextPage = () => {
        let type = '';
        if (result.title === 'Search results') {
            fetch(`https://api.themoviedb.org/3/search/movie?query=${result.input}&include_adult=true&language=en-US&page=${(result.page + 1)}`, OPTIONS)
                .then(res => res.json())
                .then(data => dispatch(updateResult({ ...data, title: result.title, input: result.input })))
                .catch(err => console.log(err));
        }
        else {
            if (result.title === 'Popular') { type = 'popular' }
            else if (result.title === 'Top rated') { type = 'top_rated' }
            else if (result.title === 'Up coming') { type = 'upcoming' }
            fetch(`https://api.themoviedb.org/3/movie/${type}?language=en-US&page=${(result.page + 1)}`, OPTIONS)
                .then(res => res.json())
                .then(data => dispatch(updateResult({ ...data, title: result.title })))
                .catch(err => console.log(err));
        }
    }
    return (
        <>
            {result.total_results === 0 &&
                <h1 style={{
                    textAlign: 'center',
                    marginBottom: '20px',
                    color: 'rgba(253,29,29,1)',
                    fontSize: '50px'
                }}>No result!</h1>}
            {result.title !== undefined && result.total_results !== 0 &&
                <h1 style={{
                    textAlign: 'center',
                    marginBottom: '20px',
                    color: '#01b4e4'
                }}>{result.title}:</h1>
            }
            <div id="result">
                {result.title !== undefined && result.results.map((e, i) => <Tag data={e} key={result.title + i} />)}
            </div>
            {result.page !== undefined && result.total_results !== 0 && result.title !== 'Trending today' &&
                <div className='pageNav'>
                    {result.page !== 1 && <button onClick={() => handlePreviousPage()}><strong>&lt;&lt;</strong></button>}
                    <p>{result.page}/{result.total_pages}</p>
                    {result.page !== result.total_pages && <button onClick={() => handleNextPage()}><strong>&gt;&gt;</strong></button>}
                </div>
            }
        </>
    )
}

export default ResultPage;