import { FaFacebookF, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { FiShare2 } from "react-icons/fi";

const ShareBlock = () => {
  return (
    <div className="hidden lg:flex fixed right-6 xl:right-8 top-1/2 -translate-y-1/2 z-40">
      <div className="bg-white/95 backdrop-blur-md shadow-xl rounded-full flex flex-col items-center py-4 px-2.5 gap-4 border border-gray-100/50 transition-all duration-300 hover:shadow-2xl hover:scale-105">
        
        {/* Share Label - Vertical text with better styling */}
        <div className="writing-mode-vertical text-gray-600 text-sm font-semibold tracking-wider rotate-180 mb-1">
          SHARE
        </div>

        {/* Divider */}
        <div className="w-6 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />

        {/* Social Icons - Enhanced hover effects */}
        <a
          href="#"
          className="p-2.5 rounded-full hover:bg-pink-50 text-pink-700 hover:text-pink-800 transition-all duration-300 hover:scale-110 hover:shadow-md group"
          aria-label="Share on Facebook"
        >
          <FaFacebookF size={18} className="transition-transform duration-300 group-hover:rotate-6" />
        </a>

        <a
          href="#"
          className="p-2.5 rounded-full hover:bg-pink-50 text-pink-700 hover:text-pink-800 transition-all duration-300 hover:scale-110 hover:shadow-md group"
          aria-label="Share on Twitter"
        >
          <FaXTwitter size={18} className="transition-transform duration-300 group-hover:rotate-6" />
        </a>

        <a
          href="#"
          className="p-2.5 rounded-full hover:bg-pink-50 text-pink-700 hover:text-pink-800 transition-all duration-300 hover:scale-110 hover:shadow-md group"
          aria-label="Share on LinkedIn"
        >
          <FaLinkedinIn size={18} className="transition-transform duration-300 group-hover:rotate-6" />
        </a>

        {/* Divider */}
        <div className="w-6 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />

        <a
          href="#"
          className="p-2.5 rounded-full hover:bg-pink-50 text-pink-700 hover:text-pink-800 transition-all duration-300 hover:scale-110 hover:shadow-md group"
          aria-label="More share options"
        >
          <FiShare2 size={18} className="transition-transform duration-300 group-hover:rotate-12" />
        </a>
      </div>
    </div>
  );
};

export default ShareBlock;
