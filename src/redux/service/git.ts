import { cyberApi } from "@/redux/api";

export const gitAPI = cyberApi.injectEndpoints({
  endpoints: (builder) => ({
    // get branch from directories
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    getAllDirectories: builder.query<any, { url: string; branch: string }>({
      query: ({url, branch}) => ({
        url: `gits/list_files?gitUrl=${url}&branch=${branch}`,
      }),
    }),
  }),
});

export const { useLazyGetAllDirectoriesQuery } = gitAPI;
