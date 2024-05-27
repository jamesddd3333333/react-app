import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"


interface Data {
    company: string;
    // 根据你的JSON数据结构添加其他属性
}

function ContactPage() {
    const { state } = useLocation()
    const [data, setData] = useState<Data>(({} as Data))
    const init = () => {
        fetch('/app/mock/data.json').then(res => {
            return res.json()
        }).then(res => {
            setData(res)
        }).catch(err => {
            console.log(err)
        })
    }

    useEffect(() => {
        init()
    }, [])
    return <div>ContactPage

        <div>{state.a}</div>
        {data?.company && <div>{data.company}</div>}
    </div>
}

export default ContactPage