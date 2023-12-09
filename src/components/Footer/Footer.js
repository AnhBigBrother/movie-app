import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <img alt='' src='https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg' />
            <div id='about'>
                <p>Made by: <a href='https://github.com/AnhBigBrother' target='_blank'><strong>Tien Anh Tran</strong></a></p>
                <p>View my source code: <a href='https://github.com/AnhBigBrother/movie-app' target='_blank'><strong>GitHub</strong></a></p>
                <p>Thank to <a href='https://www.themoviedb.org/' target='_blank'><strong>The Movie Database</strong></a> for the API</p>
            </div>
        </footer>
    )
}

export default Footer;