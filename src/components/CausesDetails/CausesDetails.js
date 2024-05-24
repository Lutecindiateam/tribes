import React, { useState } from "react";
import { Col, Container, Row, Image ,button} from "react-bootstrap";
import divider from "@/images/resources/divider.png";
import Link from "next/link";
import { useRouter } from 'next/router';
// import { useNavigate } from "react-router-dom";
// import {
 
//   Button
 
// } from "@material-tailwind/react";
import CausesPage from "../CausesPage/CausesPage";


const CausesDetailsPage = () => {
  const router = useRouter();
  // const navigate = useNavigate();
  const [inputValue, setInputValue] = useState('');
  const [firstcost, setFirstcost] = useState('1000');
  const [secondcost, setSecondcost] = useState('2000');
  const [thirdcost, setThirdcost] = useState('3000');
  const [fourthcost, setFourthcost] = useState('4000');
  const [fifthcost, setFifthcost] = useState('5000');
  const [sixthcost, setSixthcost] = useState('6000');
  const [seventhcost, setSeventhcost] = useState('7000');
  const [selectedCost, setSelectedCost] = useState('');
  
  // const amt = id;
  // console.log(amt);
  // const navigate = useNavigate();
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setSelectedCost('');
  };
  // const handleButtonClick = () => {
  //   if (selectedCost || inputValue) {
  //     router.push(`/personal`);
  //   } else {
  //     // Display an error message or handle the case where no input box is clicked.
  //     console.log('Please select a donation amount before continuing.');
  //   }
  // }
  const handleButtonClick = () => {
    if (selectedCost || inputValue) {
      router.push(`/personal?amount=${selectedCost || inputValue}`);
    } else {
      console.log('Please select a donation amount before continuing.');
    }
  }
  
  const handleInputBoxClick = (value) => {
    setInputValue(value);
  };

  const handleInputBoxClick_1 = (value) => {
    setFirstcost(value);
    setSelectedCost(value);
  };

  const handleInputBoxClick_2 = (value) => {
    setSecondcost(value);
    setSelectedCost(value);
  };

  const handleInputBoxClick_3 = (value) => {
    setThirdcost(value);
    setSelectedCost(value);
  };

  const handleInputBoxClick_4 = (value) => {
    setFourthcost(value);
    setSelectedCost(value);
  };

  const handleInputBoxClick_5 = (value) => {
    setFifthcost(value);
    setSelectedCost(value);
  };

  const handleInputBoxClick_6 = (value) => {
    setSixthcost(value);
    setSelectedCost(value);
  };

  const handleInputBoxClick_7 = (value) => {
    setSeventhcost(value);
    setSelectedCost(value);
  };

  const inputStyle = {
    height: '70px',
    width: '600px',
    border: '1px solid orange',
    padding: '5px',
    fontSize: '25px',
    fontFamily: 'serif',
    borderRadius: '10px',
    textAlign: 'center',
    transition: 'border-color 0.3s ease',
    borderColor: 'orange',
  };

  return (
    <section className="causes-details">
    {/* <Container > */}
      
     
          <div className="text-center ">
            <p    style={{ fontSize: '40px', fontWeight: 'bold', fontFamily: 'serif',color:"orange" }}>Contribute Online, Impact Lives, and Enhance Your Own</p>
            <br/>
            <Link href="/">
              <Image src={divider.src} alt="" style={{ height: "40px" }} />
            </Link>
          </div>

          <div className="mt-20" style={{ display: 'flex', justifyContent: 'center' }}></div>
          <div className="mt-3" style={{ display: 'flex', justifyContent: 'center' }}></div>
          <br/>
         

          {/* <div className="mt-5" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <p>Your Contribution amount: <b>₹ {selectedCost || inputValue}</b></p>
          </div> */}
       
    {/* </Container> */}
   
    {/* <button
     className="introduction__btn thm-btn"
    variant="contained"
    color="orange"
    onClick={handleButtonClick}
    style={{ marginTop: '16px' }}
  >
  <i className="fas fa-arrow-circle-right"></i>Continue
  </button> */}

  {/* <Link href={`/personal/${selectedCost || inputValue}`}>

    <a   className="introduction__btn thm-btn">
                <i className="fas fa-arrow-circle-right"></i>Continue
              </a>
              </Link> */}

              {/* <Link href={`/personal/${selectedCost || inputValue}`}>

              <i className="fas fa-arrow-circle-right"></i>Continue
             
              </Link> */}
            <CausesPage/>
            <div className="mx-auto w-full flex flex-wrap  mt-40">
          <Row>
              <Col lg={3} className="mx-auto ">
                <input
                  className="hover:bg-gray-100 transition duration-300 ease-in-out"
                  placeholder=" ₹ Type your own amount"
                  value={inputValue}
                  onChange={handleInputChange}
                  style={inputStyle}
                  onMouseEnter={(e) => e.target.style.borderColor = 'yellow'}
                  onMouseLeave={(e) => e.target.style.borderColor = 'orange'}
                />
                

                {/* <input
                  className="hover:bg-gray-100 transition mt-4 duration-300 ease-in-out"
                  value={`I wish to offer ${firstcost}`}
                  style={inputStyle}
                  onClick={() => handleInputBoxClick_1(firstcost)}
                  onMouseEnter={(e) => e.target.style.borderColor = 'yellow'}
                  onMouseLeave={(e) => e.target.style.borderColor = 'orange'}
                />
                <input
                  className="hover:bg-gray-100 transition mt-4 duration-300 ease-in-out"
                  value={`I wish to offer ${secondcost}`}
                  style={inputStyle}
                  onClick={() => handleInputBoxClick_2(secondcost)}
                  onMouseEnter={(e) => e.target.style.borderColor = 'yellow'}
                  onMouseLeave={(e) => e.target.style.borderColor = 'orange'}
                />
                <input
                  className="hover:bg-gray-100 transition mt-4 duration-300 ease-in-out"
                  value={`I wish to offer ${thirdcost}`}
                  style={inputStyle}
                  onClick={() => handleInputBoxClick_3(thirdcost)}
                  onMouseEnter={(e) => e.target.style.borderColor = 'yellow'}
                  onMouseLeave={(e) => e.target.style.borderColor = 'orange'}
                /> */}
              </Col>
              <Col lg={3} className="mx-auto"> 
             <button
     className="introduction__btn thm-btn"
    variant="contained"
    color="orange"
    onClick={handleButtonClick}
    style={{ marginTop: '16px' }}
  >
  <i className="fas fa-arrow-circle-right"></i>Continue
  </button>

                {/* <input
                  className="hover:bg-gray-100 transition mt-4 duration-300 ease-in-out"
                  value={`I wish to offer ${fifthcost}`}
                  style={inputStyle}
                  onClick={() => handleInputBoxClick_5(fifthcost)}
                  onMouseEnter={(e) => e.target.style.borderColor = 'yellow'}
                  onMouseLeave={(e) => e.target.style.borderColor = 'orange'}
                />
                <input
                  className="hover:bg-gray-100 transition mt-4 duration-300 ease-in-out"
                  value={`I wish to offer ${sixthcost}`}
                  style={inputStyle}
                  onClick={() => handleInputBoxClick_6(sixthcost)}
                  onMouseEnter={(e) => e.target.style.borderColor = 'yellow'}
                  onMouseLeave={(e) => e.target.style.borderColor = 'orange'}
                />
                <input
                  className="hover:bg-gray-100 transition mt-4 duration-300 ease-in-out"
                  value={`I wish to offer ${seventhcost}`}
                  style={inputStyle}
                  onClick={() => handleInputBoxClick_7(seventhcost)}
                  onMouseEnter={(e) => e.target.style.borderColor = 'yellow'}
                  onMouseLeave={(e) => e.target.style.borderColor = 'orange'}
                /> */}
              </Col>
            </Row>
            {/* <Button
     className="introduction__btn thm-btn "
    variant="contained"
    color="orange"
    onClick={handleButtonClick}
    style={{
      marginTop: '16px',
      display: 'flex',
      justifyContent: 'center',
    }}
  > */}
  {/* <i className="fas fa-arrow-circle-right"></i>Continue
  </Button> */}
          </div>
            {/* <Button
     className="introduction__btn thm-btn"
    variant="contained"
    color="orange"
    onClick={handleButtonClick}
    style={{ marginTop: '16px' }}
  >
  <i className="fas fa-arrow-circle-right"></i>Continue
  </Button> */}

   </section>
 
  );
};

export default CausesDetailsPage;
