import { useLocation, useParams, useSearchParams } from "react-router-dom"


function TeamPage() {

    const { id } = useParams()
    const [query, setQuery] = useSearchParams()

    // const { state } = useLocation()
    // 两次结构的写法
    const { state: { a, fromHome } } = useLocation()



    return <div>TeamPage
        <div>id:{id}</div>
        <div>age:{query.get('age')}</div>
        <div>state:{a}</div>
        <div>state:{fromHome}</div>
        {/* true显示为空 */}
        <div>state:{fromHome ? '对' : '错'}</div>
    </div>
}

export default TeamPage