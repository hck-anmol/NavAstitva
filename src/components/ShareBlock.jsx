import { FaFacebookF, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { FiShare2 } from "react-icons/fi";

const ShareBlock = () => {
  return (
    <div className="hidden lg:flex fixed right-4 top-4/5 -translate-y-1/2 z-40">
      <div className="bg-white shadow-lg rounded-full flex flex-col items-center py-3 px-2 gap-4 border">
        
        {/* Share Label */}
        <div className="writing-mode-vertical text-gray-600 text-sm font-medium rotate-180 weight-bold">
          Share
        </div>

    

        {/* Icons */}
        <a
          href="#"
          className="p-2 rounded-full hover:bg-pink-100 text-pink-700 transition"
          aria-label="Share on Facebook"
        >
          <FaFacebookF size={16} />
        </a>

        <a
          href="#"
          className="p-2 rounded-full hover:bg-pink-100 text-pink-700 transition"
          aria-label="Share on Twitter"
        >
          <FaXTwitter size={16} />
        </a>

        <a
          href="#"
          className="p-2 rounded-full hover:bg-pink-100 text-pink-700 transition"
          aria-label="Share on LinkedIn"
        >
          <FaLinkedinIn size={16} />
        </a>

        <a
          href="#"
          className="p-2 rounded-full hover:bg-pink-100 text-pink-700 transition"
          aria-label="More share options"
        >
          <FiShare2 size={16} />
        </a>
      </div>
    </div>
  );
};

export default ShareBlock;
