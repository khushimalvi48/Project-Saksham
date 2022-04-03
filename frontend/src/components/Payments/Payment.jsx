import React,{useState} from 'react';

function loadScript(src) {
	return new Promise((resolve) => {
		const script = document.createElement('script')
		script.src = src
		script.onload = () => {
			resolve(true)
		}
		script.onerror = () => {
			resolve(false)
		}
		document.body.appendChild(script)
	})
}

const __DEV__ = document.domain === 'localhost'

function Payment() {
    const [name, setName] = useState('Bansi')

	async function displayRazorpay() {
		const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

		if (!res) {
			alert('Razorpay SDK failed to load. Are you online?')
			return
		}

		const data = await fetch('http://localhost:5000/payment', { method: 'POST' }).then((t) =>
			t.json()
		)

		console.log(data)

		const options = {
			key: __DEV__ ? 'rzp_test_13xvVnEfV5HPoJ' : 'PRODUCTION_KEY',
			amount: data.amount.toString(),
            currency: data.currency,
			order_id: data.id,
			name: 'Payment',
			description: 'Please complete the payment',
			image: 'http://localhost:5000/image',
            handler: function () {
                alert("Payment Done");
				//alert(response.razorpay_payment_id)
				//alert(response.razorpay_order_id)
				//alert(response.razorpay_signature)
			},
			prefill: {
				name,
				email: 'bansi@gmail.com',
				phone_number: '9899999999'
			}
		}
		const paymentObject = new window.Razorpay(options)
		paymentObject.open()
	}
    return (
        <div>
            <button onClick={displayRazorpay}>Pay</button>
        </div>
    )
}

export default Payment;