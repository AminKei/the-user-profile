import { EndPoints, StorageKey } from "@/constants/react-query";
import { UserProfile } from "@/models/user";
import axios from "axios";

export const getProfile = async () => {
  const r = await axios.get<UserProfile>(
    process.env.NEXT_PUBLIC_BASE_URL + EndPoints.User_Profile,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem(StorageKey.User_Token)}`,
      },
    }
  );
  return r.data;
};