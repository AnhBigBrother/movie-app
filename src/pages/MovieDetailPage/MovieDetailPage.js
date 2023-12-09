import { useSelector } from 'react-redux'
import './MovieDetailPage.css'
import { useEffect, useState } from 'react';
import { OPTIONS } from '../../API.js';
import RowContent from '../../components/RowContent/RowContent.js';


const MovieDetail = () => {
    const detail = useSelector(store => store.detail);
    const [moreInf, setMoreInf] = useState({});
    const [casts, setCasts] = useState([]);
    const [relate, setRelate] = useState([]);
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${detail.id}?language=en-US`, OPTIONS)
            .then(res => res.json())
            .then(data => {
                setMoreInf({
                    language: data.spoken_languages.map((e) => e.english_name),
                    runtime: data.runtime,
                    genres: data.genres.map((e) => e.name)
                })
            })
            .catch((err) => console.log(err))
        fetch(`https://api.themoviedb.org/3/movie/${detail.id}/credits?language=en-US`, OPTIONS)
            .then(res => res.json())
            .then(data => {
                setCasts(data.cast.map((e) => e.name));
            })
            .catch((err) => console.log(err));
        fetch(`https://api.themoviedb.org/3/movie/${detail.id}/similar?language=en-US&page=1`, OPTIONS)
            .then(res => res.json())
            .then(data => {
                setRelate(data);
            })
            .catch(err => console.error(err));
    }, [detail]);
    return (
        <div id='detailPage'>
            <div className="detail">
                <div className='poster'>
                    <img alt='' src={'http://image.tmdb.org/t/p/w500' + detail.poster_path} />
                </div>
                <div className='movieDetail'>
                    <h1>{detail.original_title}</h1>
                    <strong>Overview:</strong>
                    <i>{detail.overview}</i>
                    <p><strong>Vote Average:</strong> {Math.round(detail.vote_average * 10) / 10}</p>
                    <p><strong>Release date:</strong>  {detail.release_date}</p>
                    {moreInf.language !== undefined && <>
                        <p><strong>Runtime:</strong> {Math.floor(moreInf.runtime / 60) + "h " + moreInf.runtime % 60 + "m"}</p>
                        <p><strong>Language:</strong> {moreInf.language.join(', ')}</p>
                        <p><strong>Genres:</strong> {moreInf.genres.join(', ')}</p>
                        {casts.length !== 0 && <p><strong>Casts:</strong> {casts.join(", ")}</p>}
                    </>}
                </div>
            </div>
            {relate !== undefined && 
            <div className='relate'>
                <h1>Relate movies:</h1>
                <RowContent data={relate.results} key={'RelateMovies'}/> 
            </div>}
        </div>
    )
}

export default MovieDetail;