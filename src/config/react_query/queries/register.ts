import { EndPoints } from "@/constants/react-query";
import { UserBody, UserResponse } from "@/models/user";
import axios from "axios";

export const registerUser = async (body: UserBody): Promise<UserResponse> => {
  const response = await axios.post<UserResponse>(
    `${process.env.NEXT_PUBLIC_BASE_URL}${EndPoints.User_Register}`,
    body
  );
  return response.data;
};