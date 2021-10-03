import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export default async function handler(req, res) {
    console.log(req.body.id)
    if (req.method === 'POST') {
        try {
            const session = await stripe.checkout.sessions.create({
                mode: 'payment',
                payment_method_types: ['card', 'p24'],
                line_items: req?.body?.items ?? [],
                success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
                cancel_url: `${req.headers.origin}/`,
            })
            res.status(200).json(session)
        } catch (error) {
            res.status(500).json({ statusCode: 500, message: error.message })
            console.log(error)
        }
    } else {
        res.setHeader('Allow', 'POST')
        res.status(405).end('Method Not Allowed')
    }
}
