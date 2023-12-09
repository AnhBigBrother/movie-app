import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './Tag.css';
import updateDetail from '../../redux/Actions/updateDetail.js';

const Tag = ( {data} ) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleClickTag = () => {
        navigate('/movie-app/detail');
        dispatch(updateDetail(data));
    }
    return(
        <div className='Tag' onClick={() => handleClickTag()}>
            <img alt='' src={'https://image.tmdb.org/t/p/w300/'+data.poster_path}/>
            <div className='descrition'>
                <strong>{data.original_title}</strong>
                <p>{Math.round(data.vote_average*10)/10} star</p>
            </div>
        </div>
    )
}

export default Tag;