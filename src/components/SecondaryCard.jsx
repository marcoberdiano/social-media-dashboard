import arrowUp from '../images/icon-up.svg';
import arrowDown from '../images/icon-down.svg';

const SecondaryCard = ({isDarkMode, social, desc, total, gain}) => {
    return ( 
        <div className={`secondary-card-container card-bg ${isDarkMode ? 'hover-light': 'hover-dark' }`}>
            <div className="card-head">
                <span className='secondary-text'>{desc}</span>
                <img src={require(`../images/icon-${social}.svg`)} alt="social icon"></img>
            </div>
            <div className="card-body">
                <h2 className='primary-text views'>{total}</h2>
                <div className="cardfooter">
                    <img src={gain < 0 ? arrowDown : arrowUp} alt="arrow" />
                    <span className={`secondary-text ${gain > 0 ? 'positive' : 'negative'}`}>{Math.abs(gain)}%</span>
                </div>
            </div>
        </div>
     );
}
 
export default SecondaryCard
