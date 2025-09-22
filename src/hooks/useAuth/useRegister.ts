import { registerUser } from "@/config/react_query/queries/register";
import { useMutation, useQueries } from "@tanstack/react-query";

export const useRegister = () => {
  const { isPending, data, isSuccess, isError, mutate } = useMutation({
    mutationFn: registerUser,
  });
  return {
    isPending,
    data,
    isError,
    isSuccess,
    Register: mutate,
  };
};
