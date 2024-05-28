import { useContext } from "react"
import Box, { MyContext, MyContextType } from "./context/Box"




function HomePage() {



    const context = useContext<MyContextType>(MyContext)
    const { value, setValue } = context

    const hanleClick = () => {
        setValue('aaa')
    }
    return <div>
        <Box>
            {value}
            <button onClick={() => hanleClick}>修改</button>
        </Box>
    </div>
}

export default HomePage