import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { NavBar } from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './components/Banner';
import Skills from './components/Skills';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <Skills/>
      <Projects/>
      {/* <NavBar/> */}
    </div>
  );
}

export default App;
