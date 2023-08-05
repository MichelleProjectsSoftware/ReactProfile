import './App.css';
import Header from './Header';
import CardData from './CardData'; // Import the CardData component
import Footer from './Footer';
import { useTheme } from './ThemeContext';
import './App.css'; // Import the CSS file

const App = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div  className={`app ${isDarkMode ? 'dark' : 'light'}`}>

      <Header />
      <button onClick={toggleTheme}>
          {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}🤖
      </button>
      <CardData />
      <Footer />
         
    </div>
  );
};

export default App;

