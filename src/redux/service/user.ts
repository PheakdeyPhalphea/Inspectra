import { cyberApi } from "@/redux/api";
import { UserDetail } from "@/types/UserDetail";


export const userAPI = cyberApi.injectEndpoints({
  endpoints: (builder) => ({
    // get user feedback
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    getUserDetail: builder.query<any, {uuid: string}>({
      query: ({uuid}) => ({
        url: `/users/${uuid}`,
      }),
    }),
  }),
});

export const {  useGetUserDetailQuery } = userAPI;
