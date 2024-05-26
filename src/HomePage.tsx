import { useNavigate } from "react-router-dom"

function HomePage() {
    const navigate = useNavigate()
    const jump = (id: number) => {

        navigate(`/about/teamPage/${id}`)
        // navigate(`/about`)
    }
    return <div>
        <div>HomePage</div>
        <div>
            <button onClick={() => jump(1)}>点击</button>
        </div>
    </div>
}

export default HomePage