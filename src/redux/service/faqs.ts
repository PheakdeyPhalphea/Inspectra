import { cyberApi } from "@/redux/api";

export const faqApi = cyberApi.injectEndpoints({
  endpoints: (builder) => ({
    // get user feedback
    getAllFAQ: builder.query({
      query: () => ({
        url: `/faq`,
      }),
    }),
  }),
});

export const {  useGetAllFAQQuery } = faqApi;
