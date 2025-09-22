// import {
//   QueryClient,
//   useMutation,
//   useQuery,
//   useQueryClient,
// } from "@tanstack/react-query";

// export const useApi = useQuery;

// export const useMutateApi: typeof useMutation = (params) => {
//   return useMutation({
//     ...params,
//     onError: (error, variables, context) => {
//       const { onError: onResponseError } = params;
//       onResponseError?.(error, variables, context);
//     },
//   });
// };

// export const useAppQueryClient: typeof useQueryClient = () => {
//   const queryClient = useQueryClient();
//   return queryClient;
// };

// export const appQueryClient = new QueryClient({
//   defaultOptions: {
//     queries: { retry: 0, refetchOnWindowFocus: false },
//   },
// });
