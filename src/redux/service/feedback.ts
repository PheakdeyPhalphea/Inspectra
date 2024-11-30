import { cyberApi } from "@/redux/api";

export const feedbackApi = cyberApi.injectEndpoints({
  endpoints: (builder) => ({
    // create user feedback
    createUserFeedback: builder.mutation({
      query: ({ message }) => ({
        url: `feedback`,
        method: "POST",
        body: { message },
      }),
    }),

    // get user feedback
    getAllUserFeedback: builder.query<any, {}>({
      query: () => ({
        url: `/feedback`,
      }),
    }),
  }),
});

export const { useCreateUserFeedbackMutation, useGetAllUserFeedbackQuery } = feedbackApi;
