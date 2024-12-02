import { cyberApi } from "@/redux/api";
import { UserDetail } from "@/types/UserDetail";

export const userAPI = cyberApi.injectEndpoints({
  endpoints: (builder) => ({
    // get user feedback
    getUserDetail: builder.query<UserDetail, {uuid: string}>({
      query: ({uuid}) => ({
        url: `/users/${uuid}`,
      }),
    }),
  }),
});

export const {  useGetUserDetailQuery } = userAPI;
