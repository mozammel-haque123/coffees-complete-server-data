import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#ECEAE3] text-[#1F1F1F]">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
        {/* Left Section */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src="https://i.ibb.co/sW4RCHg/logo1.png" alt="logo" className="h-10" />
            <h2 className="text-2xl font-bold rancho-regular">Espresso Emporium</h2>
          </div>
          <p className="mb-4 max-w-md rancho-regular">
            Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.
          </p>

          <div className="flex gap-3 text-white">
            <a href="#" className="bg-[#3B5998] p-2 rounded-full"><FaFacebookF /></a>
            <a href="#" className="bg-[#55ACEE] p-2 rounded-full"><FaTwitter /></a>
            <a href="#" className="bg-[#E4405F] p-2 rounded-full"><FaInstagram /></a>
            <a href="#" className="bg-[#0077B5] p-2 rounded-full"><FaLinkedinIn /></a>
          </div>

          <div className="mt-6 space-y-3">
            <h3 className="text-lg font-semibold rancho-regular">Get in Touch</h3>
            <p className="flex items-center gap-2 rancho-regular"><FaPhone /> +88 01533 333 333</p>
            <p className="flex items-center gap-2 rancho-regular"><FaEnvelope /> info@gmail.com</p>
            <p className="flex items-center gap-2 rancho-regular"><FaMapMarkerAlt /> 72, Wall street, King Road, Dhaka</p>
          </div>
        </div>

        {/* Right Section */}
        <div>
          <h3 className="text-2xl font-bold mb-4 rancho-regular">Connect with Us</h3>
          <form className="space-y-4">
            <input type="text" placeholder="Name" className="input input-bordered w-full" />
            <input type="email" placeholder="Email" className="input input-bordered w-full" />
            <textarea className="textarea textarea-bordered w-full" rows="4" placeholder="Message"></textarea>
            <button type="submit" className="btn btn-outline text-[#331A15] border-[#331A15] hover:bg-[#331A15] rancho-regular hover:text-white">
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="bg-[#1F1F1F] text-white text-center py-4 text-sm rancho-regular">
        Copyright © Espresso Emporium | All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
