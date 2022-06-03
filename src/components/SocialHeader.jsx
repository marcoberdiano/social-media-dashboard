import Switch from "./Switch";

const SocialHeader = ({isDarkMode, onClick, totalFollowers}) => {
    return ( 
        <div className='social-header-container'>

          <div className='social-left'>
            <h1 className="primary-text">
                Social Media Dashboard
            </h1>
            <p className="secondary-text">
                Total Followers: {totalFollowers}
            </p>
          </div>

          <div className='social-right'>
              <p className={isDarkMode ? 'secondary-text' : 'primary-text'}>Dark Mode</p>
              <Switch onClick={onClick}/>
          </div>
        </div>
     );
}
 
export default SocialHeader;