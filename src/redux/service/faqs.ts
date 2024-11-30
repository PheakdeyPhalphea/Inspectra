import { cyberApi } from "@/redux/api";

export const faqApi = cyberApi.injectEndpoints({
  endpoints: (builder) => ({
    // get user feedback
    getAllFAQ: builder.query<any, {}>({
      query: () => ({
        url: `/faq`,
      }),
    }),
  }),
});

export const {  useGetAllFAQQuery } = faqApi;
