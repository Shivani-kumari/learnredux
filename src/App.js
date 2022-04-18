
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
  const addBy = ()=>{
    // action is object with type and playlode property
    dispatch({type:'ADD',payload:10})
  }
  return (
    <div className="App">
      <button onClick={inc}>Increment</button>
      <button onClick={dec}> Decrement</button>
      <button onClick={addBy}>AddBy</button>
      {counter}
    </div>
  );
}

export default App;
