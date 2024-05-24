
import { NextResponse } from "next/server";
import connection from "src/app/config/db";


export async function POST(req, res) {
    // console.log("hello/");
    const body = await req.json();
    const { firstName, lastName, email, address, city, state, pincode, pan, indianCitizen, taxBenefit, country, phone, donationAmount, status } = body;

    const sqlInsert = "INSERT INTO formdata (firstname, lastname, email, address, city, state, pincode, pan, indian, tax, country, phone, amount, status) VALUES ?";
    const values = [[firstName, lastName, email, address, city, state, pincode, pan, indianCitizen, taxBenefit, country, phone, donationAmount, status]];

    try {
        const insertResult = await new Promise((resolve, reject) => {
            connection.query(sqlInsert, [values], (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });

        console.log("SuccessfulId:", insertResult.insertId);

        // Now, retrieve id, firstname, lastname, and amount using a SELECT query
        const sqlSelect = "SELECT id, firstname, lastname, amount FROM formdata WHERE id = ?";
        const selectValues = [insertResult.insertId];

        const selectResult = await new Promise((resolve, reject) => {
            connection.query(sqlSelect, selectValues, (err, rows) => {
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
        return NextResponse.json({ status: "error", message: "Failed to save data" });
    }
}







