import { useParams, useSearchParams } from "react-router-dom"


function TeamPage() {

    const { id } = useParams()
    const [query, setQuery] = useSearchParams()

    return <div>TeamPage
        <div>id:{id}</div>
        <div>age:{query.get('age')}</div>
    </div>
}

export default TeamPage