import { useInRouterContext, useLocation, useNavigationType, useParams, useSearchParams } from "react-router-dom"


function TeamPage() {

    const { id } = useParams()
    const [search, setSearch] = useSearchParams()

    const { state } = useLocation()
    // 两次解构的写法
    // const { state: { a, fromHome } } = useLocation()

    const handleSearch = () => {
        setSearch({ age: 'aaa' })
    }

    const flag = useInRouterContext()
    const type = useNavigationType()

    return <div>TeamPage
        <div>id:{id}</div>
        <div>age:{search.get('age')}</div>
        <div>state:{state?.a}</div>
        <div>state:{state?.fromHome}</div>
        {/* true显示为空 */}
        <div>state:{state?.fromHome ? '对' : '错'}</div>
        <div>
            <button onClick={() => handleSearch()}>修改search</button>
        </div>
        <div>{flag ? '在里面' : '在外面'}</div>
        <div>{type}</div>
    </div>
}

export default TeamPage