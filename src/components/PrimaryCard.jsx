import arrowUp from '../images/icon-up.svg';
import arrowDown from '../images/icon-down.svg';
import { Card } from '../stylecomponents/style';

const PrimaryCard = ({isDarkMode, social, user, totalFollowers, dailyFollowers, color}) => {
    return (
        <div className={
            `primary-card-container card-bg ${isDarkMode ? 'hover-light': 'hover-dark' }`
            
            }>
            <Card bg = {color}>
                <div className="card-head">       
                    <img src={require(`../images/icon-${social}.svg`)} alt={social}/>
                    <span className='secondary-text'>{user}</span>     
                </div>
                <div className="card-body">
                    <h1 className='primary-text numFollowers'>{totalFollowers}</h1>
                    <h2 className='secondary-text followers'>followers</h2>
                </div>
                <div className="card-footer">
                    <img src={dailyFollowers < 0 ? arrowDown : arrowUp} alt="arrow" />
                    <span className={`secondary-text ${dailyFollowers > 0 ? 'positive' : 'negative'}`}>{ Math.abs(dailyFollowers)} Today</span>
                </div>
            </Card>
        </div>
       
     );
}
 
export default PrimaryCard;