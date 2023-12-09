import './RowContent.css';
import Tag from '../Tag/Tag';
import { useRef } from 'react';

const RowContent = ({ data }) => {
    const ref = useRef();
    const scroll = (scrollOffset) => {
        ref.current.scrollLeft += scrollOffset;
    };
    return (
        <div className='container'>
            <button className='scrollRight' onClick={() => scroll(690)}><h3>&gt;</h3></button>
            <button className='scrollLeft' onClick={() => scroll(-690)}><h3>&lt;</h3></button>
            <div className="RowContent" ref={ref}>
                {data && data.map((e, i) => <Tag data={e} key={'Tag' + i} />)}
            </div>
        </div>
    )
}

export default RowContent;