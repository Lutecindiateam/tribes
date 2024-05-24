// import connection from "src/app/config/db";
// import { NextResponse } from "next/server";

// export async function POST(req, res) {
//   // console.log("requestUpdate: " + req);
//     const { status, id  } = req.body;

//     try {
//         // Update the status in the database
//         const sqlUpdateStatus = "UPDATE formdata SET status = ? WHERE id = ?";
//         const values = [status, id];

//         await new Promise((resolve, reject) => {
//             connection.query(sqlUpdateStatus, values, (err, result) => {
//                 if (err) {
//                     reject(err);
//                 } else {
//                     resolve(result);
//                 }
//             });
//         });

//         // console.log("Status updated successfully");
//         return NextResponse.json({ message: "success" });

//     } catch (error) {
//         // console.error("Error updating status:", error);
//         return NextResponse.json({ message: "error" });
//     }
// }

import connection from "src/app/config/db";
import { NextResponse } from "next/server";


export async function POST(req, res) {
    const body = await req.json();
    const { status, id, payment_id } = body;

    try {
        // Update the status and payment_id in the database
        const sqlUpdateStatusAndPaymentId = "UPDATE formdata SET status = ?, payment_id = ? WHERE id = ?";
        const updateValues = [status, payment_id, id];

        await new Promise((resolve, reject) => {
            connection.query(sqlUpdateStatusAndPaymentId, updateValues, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });

        return NextResponse.json({ message: "success" });

    } catch (error) {
        console.error("Error updating status and saving payment ID:", error);
        return NextResponse.json({ message: "error" });
    }
}
