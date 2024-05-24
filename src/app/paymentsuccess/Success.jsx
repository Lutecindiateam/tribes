"use client"

import React from 'react';
import { useSearchParams } from 'next/navigation';
import { Card, Button, Table, Container, Row, Col } from 'react-bootstrap';


const Success = () => {
    const searchParams = useSearchParams();
    const paymentId = searchParams.get('paymentid');

    return (
//         <div className="mb-3 border mt-5 p-3 flex flex-col items-center justify-center"  style={{ display: 'grid', placeItems: 'center', minHeight: '80vh' }}>
//             <div className="text-center">
//               <p style={{ fontSize: "30px", fontFamily: "serif", color: "orange" }}>
//                 <b>Swami Vivekanand Medical Mission</b>
//               </p>
//               <p>Muttil PO-Kalpetta North Dist.-WAYANAD KERALA- 673122.</p>
//               <p>Registration number CSR00018118</p>
//               <hr className='mt-4' />

//             </div>
// <br/>
//             <div className="text-center" style={{ border: '1px solid #e2e8f0', borderRadius: '0.5rem', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)', padding: '5%' }}>
    
//     <p className="font-bold">Payment successful!</p>
//     <br />
//     <br />
//     <span className="block sm:inline">Your paymentID= {paymentId} has been processed.</span>
//     <br />
//     <button
//         onClick={() => window.location.href="/receipt?paymentid=" + paymentId}
//         className="introduction__btn thm-btn bg-orange-500 text-white py-2 px-4 rounded"
//         style={{ padding: '15px', backgroundColor: "orange", border: "none", borderRadius: "20px" }}
//     >
//         <i className="fas fa-arrow-circle-right"></i>Download Receipt
//     </button>
// </div>

           
          
               
         
//         </div>

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
                {/* <div className="invoice-details mt-3">
                  <ul className="list-unstyled mb-0">
                    <li><p><b>Receipt</b> : #{value?.id}</p></li>
                    <li><p><b>Receipt Date</b>: {value?.time.slice(0, -14)}</p></li>
                  </ul>
                </div> */}
                <div className="invoice-to mt-3">
                  {/* <ul className="list-unstyled">
                    <li><strong> To, </strong></li>
                    <li><p>{value?.firstname + " " + value?.lastname}</p></li>
                  </ul> */}
                </div>
                {/* <div className="mt-4">
                  <p><b>Email Id - </b> {value?.email}</p>
                  <p><b>PAN no. - </b>{value?.pan}</p>
                  <p><b>Mobile No. - </b> +91 {value?.phone}</p>
                  <p><b>Address - </b>{value?.address}</p>
                </div> */}
                <br />
                <div className="invoice-items">
                  <Table bordered style={{ backgroundColor: "#f8f9fa" }}>
                    <thead>
                      <tr>
                        <th>Description</th>
                        <th className="text-center">Amount</th>
                      </tr>
                    </thead>
                    {/* <tbody>
                      <tr>
                        <td>Corpus Donation</td>
                        <td className="text-center">₹{value?.amount}</td>
                      </tr>
                    </tbody> */}
                  </Table>
                </div>
                <br />
                {/* <div>
                  <p>Amount in Words: Indian Rupee {amountInWords} Only</p>
                </div> */}
                <div className="mt-4 p-3" style={{ backgroundColor: "#f8f9fa" }}>
                  <p><b>Donation Towards - Swami Vivekanand Medical Mission Wayanad Kerala</b></p>
                  <p className="mt-2">Donation Type - (Card/UPI/Wallet/Net Banking)</p>
                  <p className="mt-2">Payment Mode - </p>
                  {/* <p className="mt-2">Reference - {value?.payment_id}</p> */}
                </div>
                <br />
                <p>Note : Subject to Realisation</p>
                <div className="text-right">
                  <p><b>(Authorised Signatory)</b></p>
                </div>
                {/* <div className="invoice-footer mt-3 text-right">
                  <Button style={{ backgroundColor: "orange", padding: "10px" }} onClick={handlePrint} disabled={isButtonDisabled}>
                    <i className="fa fa-print mr-1"></i> Print
                  </Button>
                </div> */}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
}

export default Success;
