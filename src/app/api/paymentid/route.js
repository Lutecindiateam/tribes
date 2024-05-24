
import { NextResponse } from "next/server";
import connection from "src/app/config/db";

export  async function POST(req, res) {

    const { paymentId } = req.body;
// console.log("PAYMENT", paymentId);
    try {
      // Save payment ID to MySQL database
      const query = "INSERT INTO formdata (payment_id) VALUES (?)";
      await connection.query(query, [paymentId]);
      
      return NextResponse.json({ message: "Payment ID saved successfully" });
    } catch (error) {
      console.error("Error saving payment ID:", error);
      return NextResponse.json({ message: "Failed to save payment ID" });
    }
  } 
   

