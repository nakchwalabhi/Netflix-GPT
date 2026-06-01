import React from "react";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Browse = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    const auth = getAuth();

    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch(() => {
        navigate("/error");
      });
  };

  return (
    <div className="bg-black min-h-screen">
      {/* Header */}
      <header className="flex justify-between items-center px-8 py-4 bg-linear-to-b from-black to-transparent absolute w-full z-10">
        
        {/* Netflix Logo */}
        <img
          src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2026-05-14/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="Netflix"
          className="w-40 md:w-48"
        />

        {/* User Section */}
        <div className="flex items-center gap-4">
          <img
            className="h-10 w-10 rounded-md object-cover"
            src="https://static.vecteezy.com/system/resources/previews/069/732/806/non_2x/3d-purple-user-avatar-icon-with-rounded-head-and-shoulder-silhouette-isolated-on-transparent-background-free-png.png"
            alt="User"
          />

          <button
            onClick={handleSignOut}
            className="bg-[#e50914] text-white font-medium px-4 py-2 rounded hover:bg-red-700 transition duration-200 cursor-pointer active:scale-95"
          >
            Sign Out
          </button>
        </div>
      </header>
    </div>
  );
};

export default Browse;