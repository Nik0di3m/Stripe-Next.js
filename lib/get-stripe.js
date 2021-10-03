import { loadStripe } from '@stripe/stripe-js'

let stripePromise = null
const getStripe = () => {
    if (!stripePromise) {
        stripePromise = loadStripe(
            'pk_test_51Jg8a5KvmClKdkj2RldYdaBWiRX37sDsXMcS8hOPntZkIXe4kVYiHH9xf7qrmHwREdX8trNJGpRtYyNCKpRyXKMo006M4F7kK8'
        )
    }
    return stripePromise
}

export default getStripe
