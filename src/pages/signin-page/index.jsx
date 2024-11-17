import Header from "@/components/home-page/header";
import { Button } from "@/components/ui/button";
import { DispatchContext, StateContext } from "@/context";
import { auth } from "@/firebase";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import { useContext, useEffect } from "react";

const SignInPage = () => {
  const { user } = useContext(StateContext);
  const dispatch = useContext(DispatchContext);

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        dispatch({ type: "UpdateUser", payload: authUser });
      } else {
        dispatch({ type: "UpdateUser", payload: null });
      }
    });

    return () => {
      unSubscribe();
    };
  }, [dispatch]);

  const handleGoogleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        dispatch({ type: "UpdateUser", payload: result?.user });
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };

  return (
    <section className="w-11/12 mx-auto">
      <Header />
      <div className="h-[calc(100vh-76px)] flex justify-center items-center bg-gray-50">
        <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
          {user ? (
            <>
              <div className="bg-blue-600 px-6 py-4 rounded">
                <h2 className="text-2xl font-semibold text-white">Welcome</h2>
              </div>
              <div>
                <h3 className="text-xl font-medium text-gray-900">
                  {user.displayName}
                </h3>
                <p className="text-sm text-gray-500">{user.email}</p>
              </div>
            </>
          ) : (
            <>
              <h2 className="text-center text-2xl font-semibold text-gray-800 mb-6">
                Sign In
              </h2>
              <Button
                variant="outline"
                className="w-full"
                onClick={handleGoogleSignIn}
              >
                <div>
                  <img src="/google-logo.svg" alt="Google logo" />
                </div>
                <span>Sign In with Google</span>
              </Button>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default SignInPage;
