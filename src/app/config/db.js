
const mysql = require('mysql')


const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: '',
    database: 'svmm'
})

connection.connect((error) => {
    if (error) throw error;
    console.log("databaseconnect:","successfull");


    // var sql = "INSERT INTO users (name,address) VALUES ? ";
    // var values = [['nandini', 'sitaburdi']]

    // connection.query(sql,[values],function(err,result){
    //     if(error) throw error;
    //     console.log("successfull"+result.affectedRows);

    // })
})




// app.get("/getreceipt/:id", (req, res) => {
//     // console.log(req.params);
//     const id = req.params.id;

//     const sql = `SELECT * FROM formdata WHERE id = ${id}`;
 
//   // Execute the query
//   connection.query(sql, (err, results) => {
//     if (err) {
//       // Handle the error
//       res.status(500).send({ message: err.message });
//       return;
//     }
 
//     // If no record is found, return a 404 status code
//     if (results.length === 0) {
//       res.status(404).send({ message: 'Record not found' });
//       return;
//     }
 
//     // Send the record back to the client
//     // console.log(results[0]);
//     // res.send(results[0]);

//     return res.status(200).json(results[0])
//   });
// });

// app.post("/save/data", async(req, res) => {
//     // console.log(res.body);

// const {firstName,lastName,email,address,city,state,PinCode, PANNumber,indianCitizen, taxBenefit , country,phone} = req.body
// var sql = "INSERT INTO formdata (firstname,lastname,email,address,city,state,pincode,pan,indian,tax,country,phone) VALUES ? ";
// var values = [[`${firstName}`,`${lastName}`,`${email}`,`${address}`,`${city}`,`${state}`,`${PinCode}`,`${PANNumber}`,`${indianCitizen}`,`${taxBenefit}`,`${country}`,`${phone}`]]
// // console.log(values);
// //  await connection.query(sql,[values],function(err,result){
// //     if(err) throw err;
    
// //     console.log("successfull"+result);
// // })

// function queryAsync(sql, values) {
//     return new Promise((resolve, reject) => {
//         connection.query(sql, values, (err, result) => {
//             if (err) {
//                 reject(err);
//             } else {
//                 resolve(result);
//             }
//         });
//     });
// }

// try {
//     const result = await queryAsync(sql, [values]);
//     console.log("Successful", result.insertId);

//     return res.status(200).json({status:"success" , data:result.insertId}) // it is res go to frontend
//     console.log("Successful", result);
// } catch (err) {
//     console.error("Error:", err);
// }


//     // console.log(req.body);
// });



module.exports = connection;
