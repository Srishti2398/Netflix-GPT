import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.error("Sign Out Error", error);
        navigate("/error");
      });
  };

  useEffect(() => {
    // ✅ FIX: Moved dependency array outside of onAuthStateChanged
    // and returned unsubscribe function to clean up listener
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid,
            email,
            displayName,
            photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    // ✅ Cleanup on unmount
    return () => unsubscribe();
  }, [dispatch, navigate]); // ✅ Proper dependency array

  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between w-full">
      <img
        className="w-44"
        src={LOGO}
        alt="Netflix Logo"
      />

      {user && (
        <div className="flex items-center space-x-4">
          <img
            className="w-12 h-12 rounded"
            alt="User Icon"
            src={user?.photoURL}
          />
          <button onClick={handleSignout} className="font-bold text-white">
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
