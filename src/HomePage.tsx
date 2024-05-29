import { useContext } from "react"
import { MyContext, MyContextType } from "./context/Box"




function HomePage() {



    const context = useContext<MyContextType>(MyContext)
    const { value, setValue } = context

    const hanleClick = () => {
        // @ts-ignore
        setValue((c: string) => {
            return 'aaddd'
        })
    }
    return <div>

        {value}
        <button onClick={() => hanleClick()}>修改</button>

    </div>
}

export default HomePage