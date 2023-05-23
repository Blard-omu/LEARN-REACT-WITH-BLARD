import './App.css';
import Home from './Home';
import About from './About';
import Navbar from './Navbar';
import Greeting from './pages/Greeting';

function App() {
  return (
    <div className="App text-danger">
      <Navbar title="Welcome To my App" />
      <Home/>
      <About/>
      <Greeting name="Blard" age="24" status="true"/>
    </div>
  );
}

export default App;
