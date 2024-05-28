// App.tsx
import React, { useContext } from 'react';
import MyContext, { } from './MyContext';
import { MyContextType } from './types';

const App: React.FC = () => {
  // 使用useContext Hook来访问Context
  const { value, setValue } = useContext<MyContextType>(MyContext);

  return (
    <div>
      <h1>App Component</h1>
      <p>Context Value: {value}</p>
      <button onClick={() => setValue('Updated Value')}>Update Context</button>
    </div>
  );
};

export default App;