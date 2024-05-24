import connection from "src/app/config/db";
import { NextResponse } from 'next/server';

export async function POST(req, res) {
  

    
  try {
    const sqlSelect = "SELECT * FROM formdata"; // Select all rows from the table
    const selectResult = await new Promise((resolve, reject) => {
      connection.query(sqlSelect, (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows); // Return all rows
        }
      });
    });
    //  console.log("Selected data:", selectResult);

    return NextResponse.json({ status: "success", data: selectResult });

  } catch (err) {
    console.error("Error:", err);
    return NextResponse.json({ status: "error", message: "Failed to fetch data" });
  }
}
