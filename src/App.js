import Header from './components/Header';
import Home from './components/Home';
import ProjectAddSection from "./components/ProjectAddSection"
import './App.css';

const App = () => (
  <div className='project-main-container'>
    <Header/>
    <Home/>
    <ProjectAddSection/>
  </div>
)



export default App;