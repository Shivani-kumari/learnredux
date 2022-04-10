import logo from './logo.svg';
import './App.css';
import {useSelector} from 'react-redux'

function App() {
  const counter = useSelector((state) => state.counter)
  return (
    <div className="App">
      {counter}
    </div>
  );
}

export default App;
