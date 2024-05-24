
// import React, { useEffect, useState } from 'react';
// import { Card, CardBody, Button } from "@material-tailwind/react";
// import { useRouter } from 'next/router';

// const ReceiptDetails = () => {
//   const [isButtonDisabled, setIsButtonDisabled] = useState(false)
//    const [value,setValue] = useState(null);
//   console.log(value);
//   const [amountInWords, setAmountInWords] = useState('');

//   const router = useRouter();
//   const { paymentid } = router.query;
//   // console.log(router.query);
//   // console.log(paymentid);
//   useEffect(() => {
//     // Fetch receipt data when the component mounts
//     if (paymentid) {
//       fetchReceiptData(paymentid);
//     }
//   }, [paymentid]); // Empty dependency array ensures this effect runs only once

//   useEffect(() => {
//     if (value) {
//       const amount = value?.amount;
//       const amountInWords = numberToWords(amount);
//       setAmountInWords(amountInWords);
//     }
//   }, [value]);

//   const fetchReceiptData = async (paymentid) => {
//     try {
//       const res = await fetch("http://localhost:3000/api/receipt", {
//         method: "POST",
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(paymentid),
//       });
//       if (!res.ok) {
//         console.log("Failed to fetch data");
//       }
//       const data = await res.json();
//       setValue(data.data);
//     } catch (error) {
//       console.log("Error fetching data:", error);
//       alert("Failed to fetch data. Please try again later.");
//     }
//   };
//   function numberToWords(number) {
//     const units = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
//     const teens = ['', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
//     const tens = ['', 'Ten', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];

//     if (number === 0) return 'Zero';

//     // Function to convert three digits to words
//     function convertThreeDigits(num) {
//         if (num === 0) return '';

//         let words = '';

//         if (num >= 100) {
//             words += units[Math.floor(num / 100)] + ' Hundred ';
//             num %= 100;
//         }

//         if (num >= 20) {
//             words += tens[Math.floor(num / 10)] + ' ';
//             num %= 10;
//         }

//         if (num > 0) {
//             if (num >= 11 && num <= 19) {
//                 words += teens[num % 10] + ' ';
//             } else {
//                 words += units[num] + ' ';
//             }
//         }

//         return words;
//     }

//     let words = '';

//     if (number >= 10000000) {
//         words += convertThreeDigits(Math.floor(number / 10000000)) + 'Crore ';
//         number %= 10000000;
//     }

//     if (number >= 100000) {
//         words += convertThreeDigits(Math.floor(number / 100000)) + 'Lakh ';
//         number %= 100000;
//     }

//     if (number >= 1000) {
//         words += convertThreeDigits(Math.floor(number / 1000)) + 'Thousand ';
//         number %= 1000;
//     }

//     words += convertThreeDigits(number);

//     return words.trim();
// }

// // Example usage:
// const amount = value?.amount // Replace this with your amount
// // const amountInWords = numberToWords(amount);
// console.log(amountInWords); // Outputs: One Crore Twenty Three Lakh Forty Five Thousand Six Hundred Seventy

//   const handlePrint = () => {
//     setIsButtonDisabled(true);
//     window.print();
//   };

//   return (
//     <>
//       <div className="row">
//         <div className="col-lg-6">
//           <div className="invoice-logo"></div>
//         </div>
//         <div>
//           <div className="invoice-from">
//             <div className="text-center" style={{ fontFamily: "Times New Roman" }}>
//               <p style={{ fontSize: "30px", fontFamily: "serif", color: "orange" }}>
//                 <b>Swami Vivekanand Medical Mission</b>{" "}
//               </p>
//               <p>
//                 Muttil PO-Kalpetta North Dist.-WAYANAD KERALA- 673122.
//               </p>
//               <p>registration number CSR00018118 </p>
//             </div>
//           </div>
//           <hr className='mt-4 color-black' style={{ backgroundColor: "black" }} />
//         </div>
//       </div>
//       {/* {console.log(value)} */}
//       <div style={{ padding: '0 200px' }}> {/* Add padding from left to right */}
//         <Card className="w-full max-w-[50rem] mx-auto mb-3 border mt-20 p-3" style={{ padding: '0 160px', border: '1px solid #ccc', boxShadow: '0 0 20px rgba(0, 0, 0, 0.2)' }}>
//           <CardBody className='text-left  '  style={{padding:'60px',fontFamily: "Times New Roman"}}>
//             <p className="text-center font-bold">
//               DONATION RECEIPT
//             </p>
//             <div className="invoice-details mt-3">
//               <div className="well">
//                 <ul className="list-unstyled mb-0">
//                   <li>
//                     <p  ><b>Receipt</b> : #{value?.id}</p  >
//                   </li>
//                   <li>
//                     < p ><b>Receipt Date</b>:  {value?.time.slice(0, -14)}</p  >
//                   </li>
//                 </ul>
//               </div>
//             </div>
//             <div className="invoice-to mt-3">
//             <ul className="list-unstyled">
//                     <li>
//                       <strong> To, </strong>
//                     </li>
//                     <li>
//                       <p>{value?.firstname + " "  + value?.lastname}</p>
//                     </li>
//                   </ul>
//             </div>
//             <div className="mt-10">
//             <p>
//                     <b>Email Id - </b> {value?.email}

//                   </p>
//                   <p>
//                     <b>PAN no. - </b>{value?.pan}
//                   </p>
//                   <p>
//                     <b>Mobile No. - </b> +91 {value?.phone}
//                   </p>
//                   <p>
//                     <b>Address - </b>{value?.address}
//                   </p>
//             </div>
//             <br />
//             <div className="invoice-items">
//               <div className="table-responsive">
//                 <table className="table table-bordered" style={{ backgroundColor: "#f8f9fa" }}>
//                   <thead>
//                     <tr>
//                       <th className="text-left">Description</th>
//                       <th className="text-center">Amount   </th> 
                    
//                     </tr>
//                   </thead>
//                   <tbody>
//                     <tr>
//                       <td>Corpus Donation</td>
//                       <td className="text-center">₹{value?.amount}</td>
//                     </tr>
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//             <br />
//             <div>
//               <p>
//                  Amount in Words: Indian Rupee {amountInWords} Only 
//               </p>
//             </div>
//             <div className="mt-20 border p-3" style={{ backgroundColor: "#f8f9fa" }}>
//               <p>
//                 <b>Donation Towards - Swami Vivekanand Medical Mission Wayanad Kerala</b>
//               </p>
//               <p className="mt-2">Donation Type -  (Card/UPI/Wallet/Net Banking)</p>
//               <p className="mt-2">Payment Mode -  </p>
//               <p className="mt-2">Reference - {value?.payment_id}</p>
//             </div>
//             <br />
//             <p>Note : Subject to Realisation</p>

//             <div className='text-right' style={{ textAlign: "right" }}>
//               {/* <p><b>For Swami Vivekanand Medical Mission Wayanad</b></p>
//               <br /> */}
//               <p><b>(Authorised Signatory)</b></p>
//             </div>
//             <div className="invoice-footer mt-3">
//               <Button style={{ backgroundColor: "orange", padding: "10px" }} onClick={handlePrint} disabled={isButtonDisabled}>
//                 <i className="fa fa-print mr-1"></i> Print
//               </Button>
//             </div>
//           </CardBody>
//         </Card>
//       </div>
//     </>
//   );
// };

// export default ReceiptDetails;

import React, { useEffect, useState } from 'react';
import { Card, Button, Table, Container, Row, Col } from 'react-bootstrap';
import { useRouter } from 'next/router';

const ReceiptDetails = () => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [value, setValue] = useState(null);
  const [amountInWords, setAmountInWords] = useState('');

  const router = useRouter();
  const { paymentid } = router.query;

  useEffect(() => {
    if (paymentid) {
      fetchReceiptData(paymentid);
    }
  }, [paymentid]);

  useEffect(() => {
    if (value) {
      const amount = value?.amount;
      const amountInWords = numberToWords(amount);
      setAmountInWords(amountInWords);
    }
  }, [value]);

  const fetchReceiptData = async (paymentid) => {
    try {
      const res = await fetch("http://localhost:3000/api/receipt", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(paymentid),
      });
      if (!res.ok) {
        console.log("Failed to fetch data");
      }
      const data = await res.json();
      setValue(data.data);
    } catch (error) {
      console.log("Error fetching data:", error);
      alert("Failed to fetch data. Please try again later.");
    }
  };

  function numberToWords(number) {
    const units = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
    const teens = ['', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
    const tens = ['', 'Ten', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];

    if (number === 0) return 'Zero';

    function convertThreeDigits(num) {
      if (num === 0) return '';

      let words = '';

      if (num >= 100) {
        words += units[Math.floor(num / 100)] + ' Hundred ';
        num %= 100;
      }

      if (num >= 20) {
        words += tens[Math.floor(num / 10)] + ' ';
        num %= 10;
      }

      if (num > 0) {
        if (num >= 11 && num <= 19) {
          words += teens[num % 10] + ' ';
        } else {
          words += units[num] + ' ';
        }
      }

      return words;
    }

    let words = '';

    if (number >= 10000000) {
      words += convertThreeDigits(Math.floor(number / 10000000)) + 'Crore ';
      number %= 10000000;
    }

    if (number >= 100000) {
      words += convertThreeDigits(Math.floor(number / 100000)) + 'Lakh ';
      number %= 100000;
    }

    if (number >= 1000) {
      words += convertThreeDigits(Math.floor(number / 1000)) + 'Thousand ';
      number %= 1000;
    }

    words += convertThreeDigits(number);

    return words.trim();
  }

  const handlePrint = () => {
    setIsButtonDisabled(true);
    window.print();
  };

  return (
    <>
      <Container>
        <Row>
          <Col lg={6}>
            <div className="invoice-logo"></div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="invoice-from text-center" style={{ fontFamily: "Times New Roman" }}>
              <p style={{ fontSize: "30px", fontFamily: "serif", color: "orange" }}>
                <b>Swami Vivekanand Medical Mission</b>
              </p>
              <p>Muttil PO-Kalpetta North Dist.-WAYANAD KERALA- 673122.</p>
              <p>Registration number CSR00018118</p>
            </div>
            <hr className='mt-4' style={{ backgroundColor: "black" }} />
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={8}>
            <Card className="mb-3 border mt-5 p-3" style={{ boxShadow: '0 0 20px rgba(0, 0, 0, 0.2)' }}>
              <Card.Body className="text-left" style={{ padding: '60px', fontFamily: "Times New Roman" }}>
                <p className="text-center font-bold">DONATION RECEIPT</p>
                <div className="invoice-details mt-3">
                  <ul className="list-unstyled mb-0">
                    <li><p><b>Receipt</b> : #{value?.id}</p></li>
                    <li><p><b>Receipt Date</b>: {value?.time.slice(0, -14)}</p></li>
                  </ul>
                </div>
                <div className="invoice-to mt-3">
                  <ul className="list-unstyled">
                    <li><strong> To, </strong></li>
                    <li><p>{value?.firstname + " " + value?.lastname}</p></li>
                  </ul>
                </div>
                <div className="mt-4">
                  <p><b>Email Id - </b> {value?.email}</p>
                  <p><b>PAN no. - </b>{value?.pan}</p>
                  <p><b>Mobile No. - </b> +91 {value?.phone}</p>
                  <p><b>Address - </b>{value?.address}</p>
                </div>
                <br />
                <div className="invoice-items">
                  <Table bordered style={{ backgroundColor: "#f8f9fa" }}>
                    <thead>
                      <tr>
                        <th>Description</th>
                        <th className="text-center">Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Corpus Donation</td>
                        <td className="text-center">₹{value?.amount}</td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
                <br />
                <div>
                  <p>Amount in Words: Indian Rupee {amountInWords} Only</p>
                </div>
                <div className="mt-4 p-3" style={{ backgroundColor: "#f8f9fa" }}>
                  <p><b>Donation Towards - Swami Vivekanand Medical Mission Wayanad Kerala</b></p>
                  <p className="mt-2">Donation Type - (Card/UPI/Wallet/Net Banking)</p>
                  <p className="mt-2">Payment Mode - </p>
                  <p className="mt-2">Reference - {value?.payment_id}</p>
                </div>
                <br />
                <p>Note : Subject to Realisation</p>
                <div className="text-right">
                  <p><b>(Authorised Signatory)</b></p>
                </div>
                <div className="invoice-footer mt-3 text-right">
                  <Button style={{ backgroundColor: "orange", padding: "10px" }} onClick={handlePrint} disabled={isButtonDisabled}>
                    <i className="fa fa-print mr-1"></i> Print
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ReceiptDetails;
