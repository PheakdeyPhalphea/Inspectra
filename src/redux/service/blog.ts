import { cyberApi } from "@/redux/api";

export const blogApi = cyberApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllBlog: builder.query<any,{ page: number; pageSize: number }>({
        query: ({ page = 1, pageSize = 10 }) =>
        ({
            url: `/blogs?page=${page}&pageSize=${pageSize}`,
        }),
      }),
  }),
});

export const {  useGetAllBlogQuery } = blogApi;
