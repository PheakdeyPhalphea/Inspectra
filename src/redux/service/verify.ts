import { cyberApi } from "@/redux/api";

export const verifyAPI = cyberApi.injectEndpoints({
  endpoints: (builder) => ({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    verifyUserAccount: builder.mutation<any, { data: object }>({
      query: ({ data }) => ({
        url: `auth/verify-account`,
        method: "PUT",
        body: data,
      }),
    }),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    reVerifyUserAccount: builder.mutation<any, { email: any }>({
      query: ({ email }) => ({

        url: `auth/resend-otp?email=${email}`,
        method: "PUT",
      }),
    }),
  }),
});

export const { useVerifyUserAccountMutation, useReVerifyUserAccountMutation } =
  verifyAPI;
