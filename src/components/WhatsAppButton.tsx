
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
        src="/lovable-uploads/2c3f9131-0ac9-4ab6-bac3-ed30b9c9aa44.png" 
        alt="WhatsApp Logo" 
        className="w-10 h-10"
      />
    </a>
  );
};

export default WhatsAppButton;
