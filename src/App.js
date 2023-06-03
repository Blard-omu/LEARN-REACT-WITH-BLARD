import './App.css';
import Home from './Home';
import About from './About';
import Navbar from './Navbar';
import Greeting from './pages/Greeting';
import States from './pages/States';

function App() {
  const data = {
    welcome: 'You are welcome to',
    school: 'Techstudio'
  }
  return (
    <div className="App text-danger">
      <States/>
      <Navbar title="Welcome To my App" />
      <Home/>
      <About/>
      <Greeting name="Blard" age="24" status="true" data={data}/>
    </div>
  );
}

export default App;
