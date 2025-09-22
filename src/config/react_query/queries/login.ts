import { EndPoints } from "@/constants/react-query";
import { LoginUser, UserLoginResponse } from "@/models/user";
import axios from "axios";

export const loginUser = async (body: LoginUser): Promise<UserLoginResponse> => {
  const response = await axios.post<UserLoginResponse>(
    `${process.env.NEXT_PUBLIC_BASE_URL}${EndPoints.User_Login}`,
    body
  );
  return response.data;
};