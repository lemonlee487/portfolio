
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route } from 'react-router-dom';
import Home from './pages/Home';
import Particles from 'react-particles-js';

function App() {
  return (
    <>
      <Route path='/' component={Home} />
      <Particles
        className='particles-canvas'
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 900
              }
            },
            shape: {
              type: 'circle',
              stroke: {
                width: 6,
                color: 'f9ab00'
              },
            }
          }
        }}
      />
    </>
  );
}

export default App;
