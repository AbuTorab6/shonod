

import Hero from './components/Hero';
import Navigation from './components/Navigation';
import Review from './components/Review';
import Services from './components/Services';
import About from './components/About';
import Client from './components/Client';
import Footer from './components/Footer';
import Team from './components/Team';
import AllTeam from './components/AllTeam';
import EveryPageTop from './components/EveryPageTop';
import MissionVision from './components/MissionVision';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import TeamPage from './pages/TeamPage';

import MyRouter from './router/myRouter';
import {BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MyRouter/>
      </BrowserRouter>
    </div>
  );
}

export default App;
