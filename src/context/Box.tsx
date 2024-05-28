import { FC, createContext, useState } from "react"


export interface MyContextType {
    value: string;
    setValue: (newValue: string) => void;
}
export const MyContext = createContext<MyContextType>({
    value: 'default value',
    setValue: () => { }
})




const Box: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [value, setValue] = useState<string>('Hello World');

    const contextValue = {
        value,
        setValue
    };

    return <MyContext.Provider value={contextValue}>
        {children}
    </MyContext.Provider>;
};

export default Box