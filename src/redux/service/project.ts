import { cyberApi } from "@/redux/api";
import { ProjectNameType } from "@/types/ProjectNameType";

export const projectAPI = cyberApi.injectEndpoints({
  endpoints: (builder) => ({
    // create user feedback
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    createProjectName: builder.mutation<any, { projectName: ProjectNameType }>({
      query: ({ projectName }) => ({
        url: `projects`,
        method: "POST",
        body: projectName,
      }),
    }),
    // get user feedback
    getAllProjectsName: builder.query({
      query: () => ({
        url: `projects`,
        providesTags: ["Projects"],
      }),
    }),
  }),
});

export const { useCreateProjectNameMutation, useGetAllProjectsNameQuery } =
  projectAPI;
