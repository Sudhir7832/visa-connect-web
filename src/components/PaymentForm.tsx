
import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface PaymentFormProps {
  amount: number;
  onSuccess?: () => void;
}

const PaymentForm = ({ amount, onSuccess }: PaymentFormProps) => {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentError, setPaymentError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet
      return;
    }

    setIsProcessing(true);
    setPaymentError(null);

    // In a real implementation, you would create a payment intent on your server
    // and return the client secret to the frontend
    
    // For demo purposes, we'll just simulate a payment success
    setTimeout(() => {
      setIsProcessing(false);
      toast.success("Payment processed successfully!");
      if (onSuccess) onSuccess();
    }, 2000);

    // In a real implementation, you would use the following code:
    /*
    const cardElement = elements.getElement(CardElement);
    
    if (!cardElement) {
      setIsProcessing(false);
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      setPaymentError(error.message || "An error occurred");
      setIsProcessing(false);
      return;
    }

    // Send paymentMethod.id to your server for processing
    // ...
    */
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto">
      <div className="p-4 border rounded-md bg-white">
        <CardElement 
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
      </div>
      
      {paymentError && (
        <div className="text-red-500 text-sm">{paymentError}</div>
      )}
      
      <div className="text-lg font-medium">
        Amount to pay: ${(amount / 100).toFixed(2)}
      </div>
      
      <Button 
        type="submit" 
        className="w-full bg-[#F97316] hover:bg-[#FB923C]"
        disabled={!stripe || isProcessing}
      >
        {isProcessing ? "Processing..." : "Pay Now"}
      </Button>
    </form>
  );
};

export default PaymentForm;
