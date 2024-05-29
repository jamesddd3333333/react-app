import React, { useReducer } from 'react';
import './App.css';

type actionType = { type: 'add' | 'minus' }
interface State {
  count: number;
}

function App() {
  // Parameter 'state' implicitly has an 'any' type. Parameter 'action' implicitly has an 'any' type.
  const reducer = (state: State, action: actionType): State => {
    switch (action.type) {
      case 'add':
        return { count: state.count++ };
      case 'minus':
        return { count: state.count-- };
      default:
        throw new Error()
    }
  }
  const [state, dispatch] = useReducer(reducer, { count: 0 })
  const add = () => {
    dispatch({ type: 'add' })
  }
  const minus = () => {
    dispatch({ type: 'minus' })
  }
  return (
    <div className="App">
      <button onClick={add}>加</button>
      <button onClick={minus}>减</button>
      <div>Count: {state.count}</div> {/* 显示当前计数 */}
    </div>
  );
}

export default App;
