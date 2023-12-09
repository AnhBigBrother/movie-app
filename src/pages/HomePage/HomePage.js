import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import RowContent from '../../components/RowContent/RowContent';
import './HomePage.css';
import updateResult from '../../redux/Actions/updateResult.js';


const HomePage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const trending = useSelector(store => store.trending);
    const popular = useSelector(store => store.popular);
    const topRated = useSelector(store => store.topRated);
    const upComming = useSelector(store => store.upComming);

    const handleClickSeeMore =(e) => {
        if (e === 'Trending'){dispatch(updateResult({...trending, title: 'Trending today'}));}
        else if (e === 'popular'){dispatch(updateResult({...popular, title: 'Popular'}));}
        else if (e === 'topRated'){dispatch(updateResult({...topRated, title: 'Top rated'}));}
        else{dispatch(updateResult({...upComming, title: 'Up coming'}));}
        navigate('/result');
    }

    return (
        <div id="HomePage">
            <div id='Trending'>
                <h1>Trending today</h1>
                <RowContent data={trending.results} key={'Trending'}/>
                <button className='seeMore' onClick={() => handleClickSeeMore('Trending')}><strong>See more</strong></button>
            </div>
            <div id='Popular'>
                <h1>Popular</h1>
                <RowContent data={popular.results} key={'Popular'}/>
                <button className='seeMore' onClick={() => handleClickSeeMore('popular')}><strong>See more</strong></button>
            </div>
            <div id='TopRated'>
                <h1>Top Rated</h1>
                <RowContent data={topRated.results} key={'TopRated'}/>
                <button className='seeMore' onClick={() => handleClickSeeMore('topRated')}><strong>See more</strong></button>
            </div>
            <div id='UpComming'>
                <h1>Up comming</h1>
                <RowContent data={upComming.results} key={'UpComming'}/>
                <button className='seeMore' onClick={() => handleClickSeeMore('upComming')}><strong>See more</strong></button>
            </div>
        </div>
    )
}

export default HomePage;