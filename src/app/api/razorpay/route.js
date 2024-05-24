// import Razorpay from "razorpay";
// import shortid from "shortid";

// const instance = new Razorpay({
//   key_id: "rzp_test_3ayPy29FCeuB6c",
//   key_secret: "ikaCRgArRz7DSGQw5FhiTIeS",
// });

// export async function GET() {
//   // console.log("req", req.query);
//   // const { amount } = req.query; // Get the amount from the query parameters
//   const payment_capture = 1;
//   const currency = "INR";
//   const amount = 1 * 100 //
//   const options = {
//     amount: (amount).toString(),// Convert amount to paisa
//     currency,
//     receipt: shortid.generate(),
//     payment_capture,
//     notes: {
//       paymentFor: "testingDemo",
//       userId: "100",
//       productId: 'P100'
//     }
//   };

//   try {
//     const order = await instance.orders.create(options);
//     return NextResponse.json({ msg: "success", order });
//   } catch (error) {
//     console.error("Error creating Razorpay order:", error);
//     return NextResponse.error("Failed to create Razorpay order", 500);
//   }
// }


import { NextResponse } from "next/server";
import Razorpay from "razorpay";
import shortid from "shortid";

const instance = new Razorpay({
  key_id: "rzp_test_3ayPy29FCeuB6c",
  key_secret: "ikaCRgArRz7DSGQw5FhiTIeS",
});

export async function GET() {

    const payment_capture = 1;
    const amount = 1 * 100 // amount in paisa. In our case it's INR 1
    const currency = "INR";
    const options = {
        amount: (amount).toString(),
        currency,
        receipt: shortid.generate(),
   
        payment_capture,
        notes: {
            // These notes will be added to your transaction. So you can search it within their dashboard.
            // Also, it's included in webhooks as well. So you can automate it.
            paymentFor: "testingDemo",
            userId: "100",
            productId: 'P100'
        }
    };
// console.log("options",options);
   const order = await instance.orders.create(options);
  return NextResponse.json({ msg: "success",order });
}


