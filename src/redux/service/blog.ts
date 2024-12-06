import { cyberApi } from "@/redux/api";

export const blogApi = cyberApi.injectEndpoints({
  endpoints: (builder) => ({

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    getAllBlog: builder.query<any,{ page: number; pageSize: number }>({
        query: ({ page = 1, pageSize = 10 }) =>
        ({
            url: `/blogs/verified?page=${page}&size=${pageSize}`,
        }),
      }),

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    likeBlog: builder.mutation<any,{uuid:string }>({
        query: ({uuid}) => ({
            url: `/blogs/${uuid}/like`,
            method: "POST",
        }),
    }),

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    getBlogDetails: builder.query<any,{uuid:string}>({
        query: ({uuid}) => ({
            url: `/blogs/${uuid}`,
            method: "GET",
        }),
    }),

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
     getBlogByUserUuid: builder.query<any,{uuid:string}>({
        query: ({uuid}) => ({
            url: `/blogs/user/${uuid}`,
            method: "GET",
        }),
     }),


  }),
});

export const {  useGetAllBlogQuery, useLikeBlogMutation, useGetBlogDetailsQuery, useGetBlogByUserUuidQuery } = blogApi;
