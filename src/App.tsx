// App.tsx
import React from 'react';
import ContextProvider from './ContextProvider';
import ConsumerComponent from './ConsumerComponent';

const App: React.FC = () => {
  return (
    <ContextProvider>
      <ConsumerComponent />
    </ContextProvider>
  );
};

export default App;