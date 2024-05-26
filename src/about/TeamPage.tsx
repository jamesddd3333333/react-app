import { useLocation, useParams, useSearchParams } from "react-router-dom"


function TeamPage() {

    const { id } = useParams()
    const [query, setQuery] = useSearchParams()

    const { state } = useLocation()



    return <div>TeamPage
        <div>id:{id}</div>
        <div>age:{query.get('age')}</div>
        <div>state:{state?.a}</div>
    </div>
}

export default TeamPage