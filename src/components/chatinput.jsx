import { FiPaperclip, FiSend } from "react-icons/fi";

const ChatInput = () => {
  return (
    <div className="h-16 px-6 flex items-center gap-4 bg-white border-t sticky bottom-0 z-20">
      <FiPaperclip className="text-gray-400 cursor-pointer text-lg" />

      <input
        type="text"
        placeholder="Type your message..."
        className="flex-1 h-10 border border-gray-300 rounded-md px-4 text-sm outline-none focus:border-red-500"
      />

      <button className="w-10 h-10 bg-[#ff3b30] rounded-md flex items-center justify-center">
        <FiSend className="text-white text-lg" />
      </button>
    </div>
  );
};

export default ChatInput;
