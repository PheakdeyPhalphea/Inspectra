import { cyberApi } from "@/redux/api";

export const verifyAPI = cyberApi.injectEndpoints({
  endpoints: (builder) => ({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    verifyUserAccount: builder.mutation<any, { data: object }>({
      query: ({ data }) => ({
        url: `auth/verify-account`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useVerifyUserAccountMutation,  } = verifyAPI;
