import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChalkboardUser,
  faPaperPlane,
  faSmile,
  faPaperclip,
} from '@fortawesome/free-solid-svg-icons';

const ChatPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      setMessage('');
    }
  };

  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-7 bg-[#04AA6D] text-white text-lg px-10 py-2.5 rounded-full hover:opacity-80 cursor-pointer border-none"
      >
        Chat
      </button>

      {isOpen && (
        <div className="fixed bottom-0 right-4 z-10">
          <div className="max-w-[300px] w-[300px] bg-white rounded-t-2xl shadow-lg">
            <div className="bg-[#04AA6D] p-4 rounded-t-2xl flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FontAwesomeIcon
                  icon={faChalkboardUser}
                  className="text-white text-xl"
                />
                <h3 className="text-lg font-medium text-white">Chat with us</h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:opacity-80"
              >
                ×
              </button>
            </div>

            <div className="h-[300px] overflow-y-auto p-4 bg-gray-50">
              <div className="flex gap-2 mb-4">
                <div className="w-8 h-8 bg-[#04AA6D] rounded-full flex items-center justify-center">
                  <FontAwesomeIcon
                    icon={faChalkboardUser}
                    className="text-white"
                  />
                </div>
                <div className="bg-white p-3 rounded-lg shadow-sm max-w-[200px]">
                  <p className="text-gray-600">
                    Hi! How can we help you today?
                  </p>
                </div>
              </div>
            </div>
            <form
              onSubmit={handleSubmit}
              className="p-4 border-t border-gray-200 bg-white"
            >
              <div className="relative">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type a message..."
                  className="w-full pr-20 pl-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-[#04AA6D]"
                />
                <div className="absolute right-2 top-1/2 -translate-y-1/2 flex gap-2">
                  <button
                    type="button"
                    className="text-gray-500 hover:text-[#04AA6D]"
                  >
                    <FontAwesomeIcon icon={faSmile} />
                  </button>
                  <button
                    type="button"
                    className="text-gray-500 hover:text-[#04AA6D]"
                  >
                    <FontAwesomeIcon icon={faPaperclip} />
                  </button>
                  <button
                    type="submit"
                    className="text-[#04AA6D] hover:opacity-80"
                  >
                    <FontAwesomeIcon icon={faPaperPlane} />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatPopup;
