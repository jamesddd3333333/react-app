import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

function HomePage() {
    const navigate = useNavigate()
    const jump = (id: number) => {

        navigate(`/about/teamPage/${id}?age=23`, {

        })
        // navigate(`/about`)
    }
    const jump2 = (id: number) => {

        navigate(`/about/teamPage/${id}?age=24`, {
            state: { a: 'a', fromHome: true }
        });
    }

    const jump3 = (id: number) => {

        navigate(`/contact`, {
            state: { a: 'a', }
        });
    }

    const [num, setNum] = useState(1)

    useEffect(() => {
        // console.log(num.a)
    }, [])
    const obj = {}
    const test = () => {
        // @ts-ignore
        console.log(obj.a.a)
    }
    return <div>
        <div>HomePage</div>
        <div>
            <button onClick={() => jump(1)}>点击</button>
            <button onClick={() => jump2(1)}>点击2</button>
            <button onClick={() => jump3(1)}>点击3</button>
            <button onClick={() => test()}>test</button>
        </div>
    </div>
}

export default HomePage