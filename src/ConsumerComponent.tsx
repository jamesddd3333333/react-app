// ConsumerComponent.tsx
import React, { useContext } from 'react';
import MyContext from './MyContext';
import { MyContextType } from './types'


const ConsumerComponent: React.FC = () => {
    // 使用泛型来指定context的类型
    const { value, setValue } = useContext<MyContextType>(MyContext);

    return (
        <div>
            <p>{value}</p>
            <button onClick={() => setValue('New Value')}>Change Value</button>
        </div>
    );
};

export default ConsumerComponent;