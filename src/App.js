
import './App.css';
import {useSelector,useDispatch} from 'react-redux'

function App() {
  const counter = useSelector((state) => state.counter)
  const dispatch = useDispatch()
  const inc = ()=>{
    dispatch({type:'INC'})
  }
  const dec = ()=>{
    dispatch({type:'DEC'})
  }
  return (
    <div className="App">
      <button onClick={inc}>Increment</button>
      <button onClick={dec}> Decrement</button>
      {counter}
    </div>
  );
}

export default App;
