export const QueryKeys = Object.freeze({
  is_authenticated: "is_authenticated",
  Get_Profile: "Get_Product",
});

export const EndPoints = {
  User_Register: "/users",
  User_Login: "/auth/login",
  User_Profile: "/auth/profile",
};
export const StaleTime = {
  Product_List: 2 * 60 * 1000,
};
export const StorageKey = {
  User_Token: "User_Token",
};
