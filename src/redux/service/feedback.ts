import {cyberApi} from "@/redux/api"

export const feedbackApi = cyberApi.injectEndpoints({
    endpoints: (builder) => ({
      // feedback user
      createUserFeedback: builder.mutation({
        query: ({ message }) => ({
          url: `feedback`,
          method: "POST",
          body: { message },
        }),
      }),
    }),
  });
  
  export const { useCreateUserFeedbackMutation } = feedbackApi;