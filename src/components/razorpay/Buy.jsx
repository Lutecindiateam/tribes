import React, { useState } from "react";

const Buy = ({ makePayment }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = () => {
    setIsLoading(true);
    makePayment({ productId: "P100" })
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

  return (
    
      <button
        onClick={handleSubmit}
        disabled={isLoading}
        style={{ backgroundColor: "orange", marginLeft: "20px" }}
        
        className={`py-2 px-4 rounded ${
          isLoading ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        {isLoading ? "Processing..." : "Payable Securely"}
      </button>
    
  );
};

export default Buy;
