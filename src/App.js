// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';

function MyBlock({ size, children }) {
  let [num, setNum] = useState(1)
  let [label, setLabel] = useState(10)
  const handleClick = () => {
    // alert(`clicked ${size}`)
    // setNum(++num)
    ++label
    setNum(++num)
    if (num % 10 == 0) {
      setLabel(++label)
    }
  }

  useEffect(() => {
    console.log('mounted')
    return () => {
      console.log('退出')
    }
  }, [])
  useEffect(() => {
    console.log('num改变')
    return () => {
      console.log('退出2')
    }
  }, [num])

  return (
    <>
      <div style={{ color: 'red', fontSize: size || '22px' }}>
        hi , boy - {num}
        <p>{'label:' + label}</p>

      </div>
      <p onClick={handleClick}>{children}</p>
    </>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">

        {/* {MyBlock({})} */}
        <MyBlock size='30px'></MyBlock>
        <MyBlock size='30px'>
          <button>点击</button>
        </MyBlock>
      </header>
    </div>
  );
}

export default App;
