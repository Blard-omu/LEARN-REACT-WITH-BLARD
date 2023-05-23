import './App.css';
import Home from './Home';
import About from './About';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <Navbar title="Welcome To my App"  />
      <Home/>
      <About/>
    </div>
  );
}

export default App;
