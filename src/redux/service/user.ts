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
    // update user profile
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    updateUserProfile: builder.mutation<any, {userProfile: object}>({
      query: ({userProfile}) => ({
        url: `users/profile`,
        method: "PUT",
        body: userProfile,
      }),
    }),
  }),
});

export const {  useGetUserDetailQuery, useUpdateUserProfileMutation } = userAPI;
