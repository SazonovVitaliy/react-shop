import { useAppSelector } from "./redux";

export const useAuth = () => {
  const { email, token, id, isAuth } = useAppSelector((state) => state.user);
  return {
    isAuth,
    email,
    token,
    id,
  };
};
