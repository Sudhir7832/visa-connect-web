
import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PaymentForm from "../components/PaymentForm";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

// Replace with your Stripe publishable key
// In a production app, you should use an environment variable
const stripePromise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");

const Payment = () => {
  const [selectedAmount, setSelectedAmount] = useState(10000); // $100.00 in cents
  
  const handleAmountChange = (value: string) => {
    setSelectedAmount(parseInt(value));
  };

  const handlePaymentSuccess = () => {
    // Reset or redirect after successful payment
    console.log("Payment was successful");
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <div 
        className="bg-cover bg-center py-16 relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://images.unsplash.com/photo-1567427018141-0584cfcbf1b8)`,
          backgroundAttachment: "fixed"
        }}
      >
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-4xl font-bold mb-4 text-white">Make a Payment</h1>
          <p className="text-xl text-white">Secure and convenient visa service payments</p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12 flex-grow">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Select Payment Amount</h2>
          
          <div className="mb-10">
            <RadioGroup 
              defaultValue={selectedAmount.toString()} 
              onValueChange={handleAmountChange}
              className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8"
            >
              <div className="flex items-center space-x-2 border p-4 rounded-md hover:bg-gray-50 cursor-pointer">
                <RadioGroupItem value="5000" id="amount-1" />
                <Label htmlFor="amount-1" className="flex-grow cursor-pointer">$50.00</Label>
              </div>
              <div className="flex items-center space-x-2 border p-4 rounded-md hover:bg-gray-50 cursor-pointer">
                <RadioGroupItem value="10000" id="amount-2" />
                <Label htmlFor="amount-2" className="flex-grow cursor-pointer">$100.00</Label>
              </div>
              <div className="flex items-center space-x-2 border p-4 rounded-md hover:bg-gray-50 cursor-pointer">
                <RadioGroupItem value="25000" id="amount-3" />
                <Label htmlFor="amount-3" className="flex-grow cursor-pointer">$250.00</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <h3 className="text-lg font-medium mb-4">Payment Information</h3>
            <Elements stripe={stripePromise}>
              <PaymentForm 
                amount={selectedAmount} 
                onSuccess={handlePaymentSuccess} 
              />
            </Elements>
          </div>
          
          <div className="text-sm text-gray-500 mt-8">
            <p>* This is a secure payment processed by Stripe. Your card information is never stored on our servers.</p>
            <p>* For any payment issues, please contact our support team.</p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Payment;
