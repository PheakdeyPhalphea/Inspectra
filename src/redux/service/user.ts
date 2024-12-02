import { cyberApi } from "@/redux/api";

export const userAPI = cyberApi.injectEndpoints({
  endpoints: (builder) => ({
    // get user feedback
    getUserDetail: builder.query<any, {uuid: string}>({
      query: ({uuid}) => ({
        url: `/users/${uuid}`,
      }),
    }),
  }),
});

export const {  useGetUserDetailQuery } = userAPI;
