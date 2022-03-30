import React, { useState, useEffect } from "react";
import StripeCheckout from "react-stripe-checkout";

const Pay = () => {
	const key = process.env.REACT_APP_STRIPE_KEY;
	const [stripeToken, setStripeToken] = useState(null);

	const onToken = (token) => {
		setStripeToken(token);
	};

	useEffect(() => {
		const makeRequest = async () => {
			try {
				const res = await (
					await fetch("http://localhost:5000/api/checkout/payment", {
						method: "POST",
						headers: {
							"Content-Type": "application/json",
						},
						body: JSON.stringify({
							tokenId: stripeToken.id,
							amount: 2000,
						}),
					})
				).json();

				console.log(res);
			} catch (err) {
				console.log(err);
			}
		};

		stripeToken && makeRequest();
	}, [stripeToken]);

	return (
		<div>
			<StripeCheckout
				name="nikk-stripe-test"
				billingAddress
				shippingAddress
				description="Your total is $20"
				amount={2000}
				token={onToken}
				stripeKey={key}
			>
				<button>Pay</button>
			</StripeCheckout>
		</div>
	);
};

export default Pay;
