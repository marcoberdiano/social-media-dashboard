import {useState} from 'react';
import SocialHeader from './SocialHeader';
import DashBoard from './DashBoard';
import data from '../data/data.json';


function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  }

  return (
    <main className={`app ${isDarkMode ? 'light': 'dark'}`}>
      <div className="app-container app-bg">
        <SocialHeader isDarkMode={isDarkMode} onClick={toggleTheme} totalFollowers={data.followers}/>
        <DashBoard isDarkMode={isDarkMode} data={data}/>
      </div>
    </main>
  );
}

export default App;
