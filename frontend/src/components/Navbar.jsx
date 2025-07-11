import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { LogOut, MessageSquare, Settings, User, Bot } from "lucide-react";
import ChatBot from "./ChatBot"; // Import your ChatBot component

const Navbar = () => {
  const { logout, authUser } = useAuthStore();
  const [showChatbot, setShowChatbot] = useState(false);

  return (
    <>
      <header
        className="bg-base-100 border-b border-base-300 fixed w-full top-0 z-40 
        backdrop-blur-lg bg-base-100/80"
      >
        <div className="container mx-auto px-4 h-16">
          <div className="flex items-center justify-between h-full">
            <div className="flex items-center gap-8">
              <Link
                to="/"
                className="flex items-center gap-2.5 hover:opacity-80 transition-all"
              >
                <div className="size-9 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-primary" />
                </div>
                <h1 className="text-lg font-bold">ChitChatz</h1>
              </Link>
            </div>

            <div className="flex items-center gap-2">
              {/* ✅ AI Circular Avatar Button with Local Image */}
              <button
                onClick={() => setShowChatbot((prev) => !prev)}
                className="w-10 h-10 rounded-full overflow-hidden border-2 border-purple-500 hover:scale-105 transition"
                title="Kusii - AI Assistant"
              >
                <img
                  src="aaaaaaaa.png" // ✅ Local image from public folder
                  alt="Kusii AI"
                  className="w-full h-full object-cover"
                />
              </button>

              <Link
                to={"/settings"}
                className="btn btn-sm gap-2 transition-colors"
              >
                <Settings className="w-4 h-4" />
                <span className="hidden sm:inline">Settings</span>
              </Link>

              {authUser && (
                <>
                  <Link to={"/profile"} className={`btn btn-sm gap-2`}>
                    <User className="size-5" />
                    <span className="hidden sm:inline">Profile</span>
                  </Link>

                  <button className="flex gap-2 items-center" onClick={logout}>
                    <LogOut className="size-5" />
                    <span className="hidden sm:inline">Logout</span>
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* ✅ Conditionally Render Chatbot */}
      {showChatbot && (
        <div className="fixed bottom-20 right-4 z-50">
          <ChatBot />
        </div>
      )}
    </>
  );
};

export default Navbar;
