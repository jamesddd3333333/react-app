import { Route, Routes } from "react-router-dom"

function C1() {
    return <>c1</>
}
function C2() {
    return <>c2</>
}
function C3() {
    return <>c3</>
}
function LeadershipPage() {

    return <div>
        <h1>LeadershipPage</h1>
        <Routes>
            <Route index element={<C1></C1>}></Route>
            {/* 
                <Route path="/ls/*" element={<LeadershipPage />} /> 
                这里需要再app.tsx里定义成这种形式的路由/ls/* 
                要加上/* 
                另外这里的/c3 和 c3 似乎没区别
            */}
            <Route path="c2" element={<C2></C2>}></Route>
            <Route path="/c3" element={<C3></C3>}></Route>
        </Routes>
    </div>
}

export default LeadershipPage