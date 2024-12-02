import { cyberApi } from "@/redux/api";
import { Blog } from "@/types/Blog";

export const blogApi = cyberApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllBlog: builder.query<Blog,{ page: number; pageSize: number }>({
        query: ({ page = 1, pageSize = 10 }) =>
        ({
            url: `/blogs?page=${page}&pageSize=${pageSize}`,
        }),
      }),
  }),
});

export const {  useGetAllBlogQuery } = blogApi;
