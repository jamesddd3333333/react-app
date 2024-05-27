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
    return <div>
        <div>HomePage</div>
        <div>
            <button onClick={() => jump(1)}>点击</button>
            <button onClick={() => jump2(1)}>点击2</button>
            <button onClick={() => jump3(1)}>点击3</button>
        </div>
    </div>
}

export default HomePage