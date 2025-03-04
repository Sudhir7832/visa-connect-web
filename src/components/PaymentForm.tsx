
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface PaymentFormProps {
  amount: number;
  onSuccess?: () => void;
}

declare global {
  interface Window {
    Razorpay: any;
  }
}

const PaymentForm = ({ amount, onSuccess }: PaymentFormProps) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentError, setPaymentError] = useState<string | null>(null);

  const handlePayment = async () => {
    setIsProcessing(true);
    setPaymentError(null);

    // In a real implementation, you would create an order on your server
    // and return the order_id to the frontend
    
    // Razorpay options
    const options = {
      key: "rzp_test_YourTestKey", // Replace with your actual Razorpay key
      amount: amount, // Amount in smallest currency unit (paisa for INR)
      currency: "INR",
      name: "Visa & Online Services",
      description: "Payment for Visa Services",
      image: "/lovable-uploads/f0103f9e-42d3-4e85-9041-dddbf0c91050.png",
      prefill: {
        name: "",
        email: "",
        contact: ""
      },
      theme: {
        color: "#F97316"
      },
      handler: function(response: any) {
        // This function will be called when payment is successful
        console.log(response);
        setIsProcessing(false);
        toast.success("Payment processed successfully!");
        if (onSuccess) onSuccess();
      },
      modal: {
        ondismiss: function() {
          setIsProcessing(false);
          console.log("Payment modal closed");
        }
      },
      notes: {
        address: "Visa & Online Services Office"
      }
    };

    try {
      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error("Razorpay Error:", error);
      setPaymentError("Failed to initialize payment. Please try again.");
      setIsProcessing(false);
    }
  };

  return (
    <div className="space-y-6 max-w-md mx-auto">
      {paymentError && (
        <div className="text-red-500 text-sm">{paymentError}</div>
      )}
      
      <div className="text-lg font-medium">
        Amount to pay: ₹{(amount / 100).toFixed(2)}
      </div>
      
      <Button 
        onClick={handlePayment}
        className="w-full bg-[#F97316] hover:bg-[#FB923C]"
        disabled={isProcessing}
      >
        {isProcessing ? "Processing..." : "Pay Now"}
      </Button>
      
      <div className="flex items-center justify-center mt-4">
        <img 
          src="https://razorpay.com/assets/razorpay-glyph.svg" 
          alt="Razorpay" 
          className="h-6 mr-2" 
        />
        <span className="text-sm text-gray-500">Secured by Razorpay</span>
      </div>
    </div>
  );
};

export default PaymentForm;
