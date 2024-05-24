import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Input } from "@material-tailwind/react";
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Select from "react-select";
import { Country, State, City } from "country-state-city";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import Buy from '../razorpay/Buy';
import BuyProduct from '../razorpay/BuyProduct';

const DonationForm = () => {
  const [phone, setPhone] = useState("");
  const router = useRouter();
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [donationAmount, setDonationAmount] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { amount } = router.query;
  const [razorpayLoaded, setRazorpayLoaded] = useState(false);


  useEffect(() => {
    // Load Razorpay SDK script dynamically
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => setRazorpayLoaded(true);
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);



  const handleForm = (data) => {
    console.log(data);
    // console.log("hello");
    setIsLoading(true);
    makePayment(data)
      .then(() => {
        setIsLoading(false);
        // Handle success if needed
      })
      .catch(error => {
        setIsLoading(false);
        // Handle error if needed
        console.error("Error making payment:", error);
      });
  };



  useEffect(() => {
    const { amount } = router.query;
    if (amount) {
      setDonationAmount(amount);
      setFormData(prevData => ({ ...prevData, donationAmount: amount }));
    }
  }, [router.query]);
  const [formData, setFormData] = useState({
    firstName: 'nayali',
    lastName: 'mahadik',
  email: 'n@gmail.com',
    address: 'nagpur',
    indianCitizen: 'Yes',
    taxBenefit: 'Yes',
    country: 'india',
    state: 'maharashtra',
    city: 'nagpur',
    phone: '918765432123',
    pan: '123',
    pincode: '87',
    donationAmount: donationAmount,
    status: false,

  });
  // console.log(formData);

  const customStyles = {
    control: (provided) => ({
      ...provided,
      border: 'none', // Remove the border
      boxShadow: 'none', // Remove any box shadow
      borderBottom: '1px solid #ccc',
      color: 'grey', // Set placeholder color to grey
      fontSize: '15px' // Set placeholder font size to 12px
    }),
  };


  const handleChange = (e) => {
    const { name, value, type } = e.target;
    if (type === 'radio') {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const requiredFields = ["firstName", "lastName", "address", "email", "phone"];
    const isFormValid = requiredFields.every((field) => formData[field].trim() !== '');
    if (!isFormValid) {
      alert("Please fill in all required fields");
      console.error('Please fill in all required fields');
      return;
    }
    setFormData((prevData) => ({ ...prevData }));

    // Ensure that donationAmount is included in formData
    formData.donationAmount = donationAmount;

    // Send formData object to backend including donationAmount
    fetch("http://localhost:3000/api/save", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(async (res) => {
        if (res.ok) {
          const data = await res.json();
          alert("Success");
          handleForm(data); // Pass the response data to handleForm
        } else {
          throw new Error('Failed to save data');
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Failed to save data");
      });
  };


  const updateStatusInBackend = async (status, payment_id, id) => {
    console.log(status, payment_id);
    try {
      const response = await fetch('http://localhost:3000/api/update', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: status, payment_id: payment_id, id: id }),
      });
      // console.log(response);
      const data = await response.json();
      console.log('Status update response:', data);
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };






  const makePayment = async (data) => {
    console.log(data);
    // Fetch Razorpay order details
    const response = await fetch("http://localhost:3000/api/razorpay");
    const { order } = await response.json();
    // console.log(order);
    // Construct options for Razorpay payment
    const options = {
      key: process.env.RAZORPAY_API_KEY,
      name: "SVMM",
      currency: order.currency,
      amount: order.amount,
      order_id: order.id,
      description: "Understanding RazorPay Integration",
      prefill: {
        name: "SVMM",
        email: "contact@svmmkerala.org",
        contact: "+91 8281236371",
      },
      handler: async function (response) {
        try {
          // Verify payment with your backend
          const verifyResponse = await fetch("http://localhost:3000/api/paymentverify", {
            method: "POST",
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_order_id: response.razorpay_order_id,
              razorpay_signature: response.razorpay_signature
             
            }),
          });

          const verifyData = await verifyResponse.json();
          console.log("Payment verification response:", verifyData);

          if (verifyData.message === "success") {
            console.log("Payment verified successfully");
            // Update status in the frontend

            setFormData(prevData => ({ ...prevData, status: true }));
            updateStatusInBackend(true, response.razorpay_payment_id, data.data.id);
            // console.log(setFormData(prevData));
            // Redirect or perform any action upon successful payment verification
            router.push("/paymentsuccess?paymentid=" + response.razorpay_payment_id);

          }


          else {
            console.error("Payment verification failed");
            // Handle payment verification failure
            alert("Payment verification failed. Please try again.");
          }
        } catch (error) {
          console.error("Error verifying payment:", error);
          // Handle error during payment verification
          alert("Error verifying payment. Please try again.");
        }
        console.log('formData after updating status:', formData);

      },
    };

    // Create Razorpay payment object
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
    updateStatusInBackend(true, response.razorpay_payment_id);
  };

  return (
    <>
      <div className="absolute top-0 h-40 w-full   bg-center" />
      <br />


      <div className="flex flex-col items-center justify-center min-h-screen">
        <p className="mt-20 text-left " style={{ marginLeft: "30px" }}><b>Note: All Fields are Required</b></p>
        <br />
        <form onSubmit={handleSubmit} style={{ display: "flex", flexWrap: "wrap", gap: "50px", border: "1px solid gray", padding: "60px", boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)", maxWidth: "1000px", marginLeft: "200px" }}>


          <div style={{
            display: "flex",
            flexDirection: "column",
            width: "21rem",
          }} >

            <label><b>First Name</b></label>

            <input
              name="firstName"
              style={{
                borderTop: 'none',
                borderRight: 'none',
                borderLeft: 'none',
                borderBottom: '1px solid black', // You can adjust the color and style as needed
                outline: 'none', // Remove default focus outline
                color: 'grey', // Set placeholder color to grey
                fontSize: '15px' // Set placeholder font size to 12px
              }}
              type="text"
              placeholder="Enter First Name"
              onChange={handleChange}
            />
            <br />

            <label><b>Last Name</b></label>
            <input
              name="lastName"
              style={{
                borderTop: 'none',
                borderRight: 'none',
                borderLeft: 'none',
                borderBottom: '1px solid black', // You can adjust the color and style as needed
                outline: 'none', // Remove default focus outline
                color: 'grey', // Set placeholder color to grey
                fontSize: '15px' // Set placeholder font size to 12px
              }}
              type="text"
              placeholder="Enter Last Name"
              onChange={handleChange}
            />
            <br />



            <FormControl>
              <FormLabel id="demo-radio-buttons-group-label"><b>Are you an Indian Citizen?</b></FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="indianCitizen"
                onChange={handleChange}

              >
                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="No" control={<Radio />} label="No" />
              </RadioGroup>
            </FormControl>



            <br />

            <label><b>Country</b></label>
            <Select
              options={Country.getAllCountries()}
              getOptionLabel={(options) => {
                return options["name"];
              }}
              getOptionValue={(options) => {
                return options["name"];
              }}
              value={selectedCountry}
              onChange={(item) => {
                setFormData((prevData) => ({ ...prevData, 'country': item.name }));
                setSelectedCountry(item);
              }}
              placeholder="Select Country"
              styles={customStyles}
            />

            <br />
            <label><b>State</b></label>
            <Select
              options={State?.getStatesOfCountry(selectedCountry?.isoCode)}
              getOptionLabel={(options) => {
                return options["name"];
              }}
              getOptionValue={(options) => {
                return options["name"];
              }}
              value={selectedState}
              onChange={(item) => {
                setFormData((prevData) => ({ ...prevData, 'state': item.name }));
                setSelectedState(item);
              }}
              placeholder="Select State"
              styles={customStyles}
            />
            <br />
            <label><b>City</b></label>

            <Select
              options={City.getCitiesOfState(
                selectedState?.countryCode,
                selectedState?.isoCode
              )}
              getOptionLabel={(options) => {
                return options["name"];
              }}
              getOptionValue={(options) => {
                return options["name"];
              }}
              value={selectedCity}
              onChange={(item) => {
                setFormData((prevData) => ({ ...prevData, 'city': item.name }));
                setSelectedCity(item);
              }}
              placeholder="Select City"
              styles={customStyles}
            />


            <br />

            <label><b>Address</b></label>
            <input
              name="address"
              style={{
                borderTop: 'none',
                borderRight: 'none',
                borderLeft: 'none',
                borderBottom: '1px solid black', // You can adjust the color and style as needed
                outline: 'none',// Remove default focus outline
                color: 'grey', // Set placeholder color to grey
                fontSize: '15px' // Set placeholder font size to 12px
              }}
              type="text"
              placeholder="Address"
              onChange={handleChange}
            />
            <br />
            <label><b>PAN Number</b></label>
            <input
              name="pan"
              style={{
                borderTop: 'none',
                borderRight: 'none',
                borderLeft: 'none',
                borderBottom: '1px solid black', // You can adjust the color and style as needed
                outline: 'none',// Remove default focus outline
                color: 'grey', // Set placeholder color to grey
                fontSize: '15px' // Set placeholder font size to 12px
              }}
              type="text"
              placeholder="PAN Number"
              onChange={handleChange}
            />
          </div>
          <br />
          <div style={{
            display: "flex",
            flexDirection: "column",
            width: "21rem",

          }}>
            <label><b> Email</b></label>
            <input
              name="email"
              style={{
                borderTop: 'none',
                borderRight: 'none',
                borderLeft: 'none',
                borderBottom: '1px solid black', // You can adjust the color and style as needed
                outline: 'none', // Remove default focus outline
                color: 'grey', // Set placeholder color to grey
                fontSize: '15px' // Set placeholder font size to 12px
              }}
              type="text"
              placeholder="Email"
              onChange={handleChange}
            />
            <br />

            <br />

            <FormControl>
              <FormLabel id="taxBenefit"><b>Do you want 80G tax benefit?</b></FormLabel>
              <RadioGroup
                aria-labelledby="taxBenefit"
                defaultValue="female"
                name="taxBenefit"
                onChange={handleChange}

              >
                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="No" control={<Radio />} label="No" />
              </RadioGroup>
            </FormControl>


            <p>Please tick this box if you are a taxpayer in India and would like to avail tax benefits under 80G. To avail this, you need to provide your PAN/Aadhaar number</p>

            <br />
            <br />
            <br />
            <br />

            <br />
            <label><b>Pin / Zip Code</b></label>

            <input
              name="pincode"
              style={{
                borderTop: 'none',
                borderRight: 'none',
                borderLeft: 'none',
                borderBottom: '1px solid black', // You can adjust the color and style as needed
                outline: 'none',// Remove default focus outline
                color: 'grey', // Set placeholder color to grey
                fontSize: '15px' // Set placeholder font size to 12px
              }}
              type="text"
              placeholder="Pin / Zip Code"
              onChange={handleChange}
            />
            <br />
            <label><b>Mobile Number</b></label>
            <br />
            <PhoneInput
              country={"in"}
              enableSearch={true}
              value={phone}
              onChange={(phone) =>
                setFormData((prevData) => ({ ...prevData, 'phone': phone }),
                  setPhone(phone)
                )

              }
            />



          </div>



        </form>
        <br />


        <div className=' text-center' style={{ marginTop: "20px" }}>
          <div style={{ fontSize: "18px" }}> <b>"Appreciating Your ₹  {amount}: A Simple Act, a Big Difference!"</b></div>
          <div style={{ marginTop: "20px" }}>

            <button className="py-2 px-4 " style={{ backgroundColor: "#cee0d3", marginLeft: "20px" , borderRadius: "20px", border:"none"}} >
              <a href="/causes-details" >Back</a>
            </button>

            <button
            className="py-2 px-4 " 
              type="submit"
              onClick={handleSubmit}
              style={{ backgroundColor: "orange", marginLeft: "20px" ,borderRadius: "20px", border:"none"}}
            >
              Payable Securely
            </button>

          </div>


        </div>

        <div>

        </div>

      </div>
      {/* <a href="/receipt" className="introduction__btn thm-btn">
                <i className="fas fa-arrow-circle-right"></i>DownLoad Receipt
              </a> */}
      <br />
    </>
  );
};
export default DonationForm;







