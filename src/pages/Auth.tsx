import Form from "../components/Form";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useAppDispatch} from "./../hooks/redux";
import { userSlice, userSliceActions } from "./../store/slices/userSlice";

const Auth = () => {
  const auth = getAuth();
  console.log(auth);

  const dispatch = useAppDispatch();
  const { setUser} = userSliceActions;
  const handleRegistration = (email: string, password: string) => {
    createUserWithEmailAndPassword(auth, email, password).then(({ user }) =>
      dispatch(
        userSlice.actions.setUser({
          email: user.email,
          id: user.uid,
          token: user.refreshToken,
          isAuth: true,
        })
      )
    );
  };

  const handleLogin = (email: string, password: string) => {
    signInWithEmailAndPassword(auth, email, password).then(({ user }) =>
      dispatch(
        userSlice.actions.setUser({
          email: user.email,
          id: user.uid,
          token: user.refreshToken,
          isAuth: true,
        })
      )
    );
    dispatch(setUser);
  };
  return (
    <Form handleRegistration={handleRegistration} handleLogin={handleLogin} />
  );
};

export default Auth;
