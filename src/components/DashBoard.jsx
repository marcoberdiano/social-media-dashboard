import PrimaryCard from './PrimaryCard';
import SecondaryCard from './SecondaryCard';


const DashBoard = ({isDarkMode, data}) => {
    
    return ( 
        <div className='dashboard'>
          <div className='social-container'>
            {
              data.social.map((item, index) =>
                <PrimaryCard 
                key={index}
                isDarkMode={isDarkMode}
                social={item.app}
                user={item.user} 
                totalFollowers={item.totalFollowers} 
                dailyFollowers={item.dailyFollowers}
                color={item.color}
                />
                )
            }
          </div>

          <h2 className='primary-text'>Overview- Today</h2>
          <div className='overView-container'>
          {
              data.overview.map((item, index) =>
                <SecondaryCard
                key={index}
                social ={item.social} 
                isDarkMode={isDarkMode} 
                desc={item.desc} 
                total={item.total} 
                gain={item.gain}/>
                )
            }
          </div>
        </div>
     );
}
 
export default DashBoard;