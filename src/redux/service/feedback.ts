import { cyberApi } from "@/redux/api";

export const feedbackApi = cyberApi.injectEndpoints({
  endpoints: (builder) => ({
    // create user feedback
    createUserFeedback: builder.mutation({
      query: ({ message }) => ({
        url: `feedbacks`,
        method: "POST",
        body: { message },
      }),
    }),

    // get user feedback
    getAllUserFeedback: builder.query({
      query: () => ({
        url: `feedbacks`,
        providesTags: ["Feedback"],
      }),
    }),
  }),
});

export const { useCreateUserFeedbackMutation, useGetAllUserFeedbackQuery } = feedbackApi;
