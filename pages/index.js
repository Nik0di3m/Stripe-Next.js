import axios from 'axios'
import Head from 'next/head'
import getStripe from '../lib/get-stripe'

const Home = () => {
    const redTocheckOut = async () => {
        const {
            data: { id },
        } = await axios.post('/api/checkout_sessions', {
            items: [
                { price: 'price_1JgWaqKvmClKdkj2A76sCfsu', quantity: 1 },
                { price: 'price_1Jg8c3KvmClKdkj2ISxC2WJy', quantity: 1 },
            ],
        })

        const stripe = await getStripe()
        await stripe.redirectToCheckout({
            sessionId: id,
        })
    }

    return (
        <div>
            <Head>
                <title>NFT MARKET STRIPE</title>
            </Head>
            <div className="bg-gray-900 text-white h-screen w-screen flex items-center justify-center">
                <div className="bg-gray-400 h-32 w-32" onClick={redTocheckOut}>
                    Item
                </div>
            </div>
        </div>
    )
}

export default Home
