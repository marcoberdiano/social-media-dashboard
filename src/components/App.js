import {useState} from 'react';
import SocialHeader from './SocialHeader';
import DashBoard from './DashBoard';
import data from '../data/data.json';
import Footer from './Footer';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  }

  return (
        <div className={`app ${isDarkMode ? 'light': 'dark'}`}>
          <main className="app-container app-bg">
            <SocialHeader isDarkMode={isDarkMode} onClick={toggleTheme} totalFollowers={data.followers}/>
            <DashBoard isDarkMode={isDarkMode} data={data}/>
          </main>
          <Footer/>
        </div>
  );
}

export default App;
