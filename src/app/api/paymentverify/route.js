
import { NextResponse } from "next/server";
import Razorpay from "razorpay";
import crypto from "crypto";
import connection from "src/app/config/db";

const instance = new Razorpay({
  key_id: "rzp_test_3ayPy29FCeuB6c",
  key_secret: "ikaCRgArRz7DSGQw5FhiTIeS",
});

export async function POST(req, res) {
// console.log(req);
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature} = await req.json();
  const body = razorpay_order_id + "|" + razorpay_payment_id 
  console.log("id==", body)

  const expectedSignature = crypto
    .createHmac("sha256", "ikaCRgArRz7DSGQw5FhiTIeS")
    .update(body.toString())
    .digest("hex");

  const isAuthentic = expectedSignature === razorpay_signature;



  if (isAuthentic) {




  } else {
    return NextResponse.json({
      message: "fail"
    }, {
      status: 400,
    })

  }


  return NextResponse.json({
    message: "success"
  }, {
    status: 200,
  })

}


// import { NextResponse } from "next/server";
// import Razorpay from "razorpay";
// import crypto from "crypto";
// import connection from "src/app/config/db";

// const instance = new Razorpay({
//   key_id: "rzp_test_3ayPy29FCeuB6c",
//   key_secret: "ikaCRgArRz7DSGQw5FhiTIeS",
// });

// export async function POST(req, res) {
//   try {
//     const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = await req.json();
//     const body = razorpay_order_id + "|" + razorpay_payment_id;
//     console.log("id==", body);

//     const expectedSignature = crypto
//       .createHmac("sha256", "ikaCRgArRz7DSGQw5FhiTIeS")
//       .update(body.toString())
//       .digest("hex");

//     const isAuthentic = expectedSignature === razorpay_signature;

//     if (isAuthentic) {
//       // Save payment ID to MySQL database
//       const query = "INSERT INTO formdata (payment_id) VALUES (?)";
//        connection.query(query, [razorpay_payment_id]);

//       return NextResponse.json({
//         message: "success"
//       }, {
//         status: 200
//       });
//     } else {
//       return NextResponse.json({
//         message: "fail"
//       }, {
//         status: 400
//       });
//     }
//   } catch (error) {
//     console.error("Error:", error);
//     return NextResponse.json({
//       message: "Internal server error"
//     }, {
//       status: 500
//     });
//   }
// }


