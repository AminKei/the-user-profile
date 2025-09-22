import { loginUser } from "@/config/react_query/queries/login";
import { StorageKey } from "@/constants/react-query";
import { useMutation } from "@tanstack/react-query";

export const useLogin = () => {
  const { isPending, mutate, isError, isSuccess, data } = useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      localStorage.setItem(StorageKey.User_Token, data.access_token);
      return data;
    },
  });

  return {
    isPending,
    data,
    isError,
    isSuccess,
    Login: mutate,
  };
};
