import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import {onAuthStateChanged} from "firebase/auth";
import "../utils/firebase";
import { toggleShowGPTSearch } from "../utils/GptSearchSlice";


const Header = ({ showUserControls = false }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();


  {/* toggle button for gpt search */}
  const toggleGptSearch = () =>{
    dispatch(toggleShowGPTSearch());
  }
  const handleSignOut = async () => {
    try {
      const auth = getAuth();
      await signOut(auth);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };
   useEffect(()=>{
      const auth = getAuth();
    const subscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
      const {uid, email, displayName} = user;
      dispatch(addUser({uid: uid, email: email, displayName: displayName}));
      
      navigate("/browse")
     
    } else {
     dispatch(removeUser())
     navigate("/")
    }
  }); return () => subscribe();
      },[])
  


  return (
    <header className="fixed top-0 w-full z-50 flex justify-between items-center px-8 py-4 bg-linear-to-b from-black via-black/80 to-transparent transition-all duration-300">
      {/* Netflix Logo */}
      <img
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2026-05-14/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Netflix"
        className="w-32 md:w-40 hover:scale-105 transition-transform duration-200 cursor-pointer"
      />

      {showUserControls && (
        <div className="flex items-center gap-6">
          <button onClick={toggleGptSearch}
  className="
    group
    relative
    flex
    items-center
    gap-2
    overflow-hidden
    rounded-full
    border
    border-red-500/30
    bg-zinc-900/90
    px-5
    py-2.5
    text-white
    backdrop-blur-md
    transition-all
    duration-300
    hover:scale-105
    hover:border-red-500
    hover:shadow-[0_0_25px_rgba(229,9,20,0.4)]
  "
>
  {/* Glow */}
  <div
    className="
      absolute
      inset-0
      opacity-0
      group-hover:opacity-100
      transition-opacity
      duration-500
      bg-linear-to-r
      from-red-600/20
      via-red-500/10
      to-red-600/20
    "
  />

  {/* Sparkle Icon */}
  <span className="relative z-10 text-red-500 text-lg">
    ✦
  </span>

  <span className="relative z-10 font-medium">
    AI Search
  </span>
</button>
          <img
            src="https://static.vecteezy.com/system/resources/previews/069/732/806/non_2x/3d-purple-user-avatar-icon-with-rounded-head-and-shoulder-silhouette-isolated-on-transparent-background-free-png.png"
            alt="User"
            className="w-10 h-10 rounded-full object-cover hover:ring-2 hover:ring-red-600 transition-all duration-200"
          />

          <button
            onClick={handleSignOut}
            className="bg-linear-to-r from-red-600 to-red-700 text-white px-6 py-2 rounded-lg font-bold hover:from-red-700 hover:to-red-800 active:scale-95 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Sign Out
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;