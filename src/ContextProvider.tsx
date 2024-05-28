// ContextProvider.tsx
import React, { useState } from 'react';
import MyContext from './MyContext';

interface ContextProviderProps {
    children: React.ReactNode;
}

const ContextProvider: React.FC<ContextProviderProps> = ({ children }) => {
    const [value, setValue] = useState<string>('Hello World');

    const contextValue = {
        value,
        setValue
    };

    return <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>;
};

export default ContextProvider;