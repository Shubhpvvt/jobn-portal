import { FaLinkedinIn, FaTwitter, FaFacebookF } from "react-icons/fa";

const JobListingFooter = () => {
  return (
    <footer>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

       
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center">
            <span className="text-white font-bold text-sm">Q</span>
          </div>

          <div className="flex items-center gap-4 text-gray-600">
            <FaLinkedinIn className="cursor-pointer hover:text-black" />
            <FaTwitter className="cursor-pointer hover:text-black" />
            <FaFacebookF className="cursor-pointer hover:text-black" />
          </div>
        </div>

       
        <div className="flex flex-wrap gap-6 text-sm text-gray-700">
          <span className="cursor-pointer hover:text-black">Features</span>
          <span className="cursor-pointer hover:text-black">Pricing</span>
          <span className="cursor-pointer hover:text-black">Integrations</span>
          <span className="cursor-pointer hover:text-black">Blog</span>
          <span className="cursor-pointer hover:text-black">Help Center</span>
          <span className="cursor-pointer hover:text-black">Community</span>
          <span className="cursor-pointer hover:text-black">About Us</span>
          <span className="cursor-pointer hover:text-black">Careers</span>
          <span className="cursor-pointer hover:text-black">Contact</span>
        </div>

      </div>
    </footer>
  );
};

export default JobListingFooter;

