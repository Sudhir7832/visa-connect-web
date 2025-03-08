
const WhatsAppButton = ({ phoneNumber }: { phoneNumber: string }) => {
  const formattedPhoneNumber = phoneNumber.replace(/\D/g, "");
  const whatsappUrl = `https://wa.me/${formattedPhoneNumber}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all z-50 flex items-center justify-center"
      aria-label="Chat on WhatsApp"
    >
      <img 
        src="/lovable-uploads/df516526-62f4-4972-8c5d-490c8656d849.png" 
        alt="WhatsApp Logo" 
        className="w-10 h-10"
      />
    </a>
  );
};

export default WhatsAppButton;
