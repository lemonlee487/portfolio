
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Project from './pages/Project'
import NavBar from './components/NavBar'
import CircleParticles from './components/CircleParticles'


function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/project' component={Project} />
      </Switch>
      <CircleParticles />
    </>
  );
}

export default App;
