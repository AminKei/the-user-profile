import { getProfile } from "@/config/react_query/queries/profile";
import { QueryKeys } from "@/constants/react-query";
import { useQuery } from "@tanstack/react-query";

export const useProfile = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: [QueryKeys.Get_Profile],
    queryFn: getProfile,
  });

  return { data, isLoading, error };
};
