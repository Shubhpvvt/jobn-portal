import {
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
} from "react-icons/fa";

const SettingFooter = () => {
  return (
    <footer className="w-full bg-white mt-16">

     
      <div className="border-t border-gray-200 mb-10"></div>

      <div className="max-w-7xl mx-auto px-6 py-10 flex items-start justify-between">

        
        <div className="flex items-start">
          <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center">
            <span className="text-white font-bold text-sm">Q</span>
          </div>
        </div>

        
        <div className="flex items-center gap-8 text-[#6B7280] mt-1">
          <FaLinkedinIn
            size={18}
            className="cursor-pointer hover:text-[#111827] transition"
          />
          <FaTwitter
            size={18}
            className="cursor-pointer hover:text-[#111827] transition"
          />
          <FaFacebookF
            size={18}
            className="cursor-pointer hover:text-[#111827] transition"
          />
        </div>

      
        <div className="grid grid-cols-3 gap-20 text-sm text-[#6B7280]">
          <div>
            <h4 className="font-semibold text-[#111827] mb-3">Product</h4>
            <ul className="space-y-2">
              <li>Features</li>
              <li>Pricing</li>
              <li>Integrations</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-[#111827] mb-3">Resources</h4>
            <ul className="space-y-2">
              <li>Blog</li>
              <li>Help Center</li>
              <li>Community</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-[#111827] mb-3">Company</h4>
            <ul className="space-y-2">
              <li>About Us</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default SettingFooter;
