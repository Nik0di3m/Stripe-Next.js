import { useRouter } from 'next/dist/client/router'
import { useEffect } from 'react'
import useSWR from 'swr'

const Success = () => {
    const {
        query: { session_id },
    } = useRouter()

    const { data, error } = useSWR(() => `/api/checkout_sessions/${session_id}`)
    useEffect(() => {
        if (data) {
            console.log(data)
        }
    }, [data])

    return (
        <div className="w-screen h-screen bg-gray-900 flex items-center justify-center">
            <h1 className="text-white text-3xl">Gratulacje kupileś itemy</h1>
        </div>
    )
}

export default Success
