import React from "react";

const chats = [
  {
    name: "Alice Johnson",
    msg: "I've reviewed the latest CTRM",
    img: "https://i.pravatar.cc/40?img=1",
    active: true,
  },
  {
    name: "Bob Smith",
    msg: "The Allegro upgrade is scheduled",
    img: "https://i.pravatar.cc/40?img=2",
  },
  {
    name: "Charlie Green",
    msg: "Check out this resume",
    img: "https://i.pravatar.cc/40?img=3",
  },
  {
    name: "Diana Ross",
    msg: "Archived this conversation about",
    img: "https://i.pravatar.cc/40?img=4",
  },
  {
    name: "Eve Taylor",
    msg: "Regarding the recent market",
    img: "https://i.pravatar.cc/40?img=5",
  },
];

const ChatSidebar = () => {
  return (
    <div className="w-[320px] bg-white border-r flex flex-col">

      {/* + New Message */}
      <div className="px-5 py-4 border-b">
        <button className="text-sm font-medium text-gray-800 flex items-center gap-1">
          <span className="text-lg">+</span> New Message
        </button>
      </div>

    
      <div className="h-10 " />

      {/* Search */}
      <div className="px-5">
        <input
          type="text"
          placeholder="Search conversations..."
          className=" px-3 py-2 text-sm outline-none"
        />
      </div>

      {/* Tabs */}
      <div className="flex px-5 gap-2 mt-3">
        <button className="flex-1 bg-red-500 text-white text-sm py-1.5 rounded">
          All
        </button>
        <button className="flex-1 bg-gray-100 text-sm py-1.5 rounded">
          Unread
        </button>
      </div>

      {/* Chat List */}
      <div className="mt-4 overflow-y-auto">
        {chats.map((chat, i) => (
          <div
            key={i}
            className={`flex items-center gap-3 px-5 py-3 cursor-pointer border-b
            ${chat.active ? "bg-blue-50" : "hover:bg-gray-50"}`}
          >
            <img
              src={chat.img}
              alt=""
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="text-sm font-medium text-gray-800">
                {chat.name}
              </p>
              <p className="text-xs text-gray-500">
                {chat.msg}
              </p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default ChatSidebar;
