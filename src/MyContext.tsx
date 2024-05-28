// MyContext.tsx
import React from 'react';
import { MyContextType } from './types';

// 创建一个泛型Context对象，初始值类型为MyContextType
const MyContext = React.createContext<MyContextType>({
    value: 'default value',
    setValue: () => { }
});

export default MyContext;