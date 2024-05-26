

import { Outlet, useNavigate } from "react-router-dom"

function AboutPage() {
    const navigate = useNavigate()
    const jump = () => {
        navigate('/')
    }
    return <div>
        <div>AboutPage</div>
        <div>
            <Outlet></Outlet>
        </div>
        <div>
            <button onClick={jump}>点击</button>
        </div>
    </div>
}

export default AboutPage