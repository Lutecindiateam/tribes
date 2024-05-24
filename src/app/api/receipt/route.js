import connection from "src/app/config/db";
import { NextResponse } from 'next/server';

export async function POST(req, res) {
  try {

    const body = await req.json();
    const paymentId = body; 

    // console.log("PaymentId", paymentId);

    const sqlSelect = "SELECT * FROM formdata WHERE payment_id = ?";
    const selectResult = await new Promise((resolve, reject) => {
      connection.query(sqlSelect, [paymentId], (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows[0]); // Assuming only one row is returned
        }
      });
    });

    // console.log("Selected data:", selectResult);

    return NextResponse.json({ status: "success", data: selectResult });

    } catch (err) {
        console.error("Error:", err);
        return NextResponse.json({ status: "error", message: "Failed to fetch data" });
    }
}


