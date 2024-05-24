import { Suspense } from "react";
import React, { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import Loading from "src/app/loading";

const BuyProduct = () => {
  const router = useRouter();
  const [razorpayLoaded, setRazorpayLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  

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

  const makePayment = async ({ productId = null }) => {
    if (razorpayLoaded) {
      // Razorpay SDK is loaded, proceed with payment logic
      const key = "rzp_test_3ayPy29FCeuB6c";

      try {
        setIsLoading(true);

        // Make API call to fetch order details
        const response = await fetch("http://localhost:3000/api/razorpay");
        const { order } = await response.json();

        // Construct options for Razorpay
        const options = {
          key: key,
          name: "SVMM",
          currency: order.currency,
          amount: order.amount,
          order_id: order.id,
          description: "Understanding RazorPay Integration",
          handler: async function (response) {
            console.log(response);

            // Verify payment on the server
            const verifyResponse = await fetch("http://localhost:3000/api/paymentverify", {
              method: "POST",
              body: JSON.stringify({
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_order_id: response.razorpay_order_id,
                razorpay_signature: response.razorpay_signature,
              }),
            });
            console.log(verifyResponse);
            const verifyData = await verifyResponse.json();
            console.log("response verify==", verifyData);

            if (verifyData?.message === "success") {
              console.log("redirecting...");
              router.push("/paymentsuccess?paymentid=" + response.razorpay_payment_id);
            }
          },
          prefill: {
            name: "SVMM",
            email: "contact@svmmkerala.org",
            contact: "+91 8281236371",
          },
        };

        // Create Razorpay object
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();

        paymentObject.on("payment.failed", function (response) {
          alert("Payment failed. Please try again. Contact support for help");
        });

        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.error("Error making payment:", error);
      }
    } else {
      console.error("Razorpay SDK is not loaded yet");
    }
  };

  return (
    <>
      <Suspense fallback={<Loading/>}>
        <button
          onClick={() => makePayment({ productId: "P100" })}
          disabled={isLoading || !razorpayLoaded}
          style={{ backgroundColor: "orange", marginLeft: "20px" }}
          className={`py-2 px-4 rounded ${
            (isLoading || !razorpayLoaded) ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {isLoading ? "Processing..." : "Payable Securely"}
        </button>
      </Suspense>
    </>
  );
};

export default BuyProduct;
