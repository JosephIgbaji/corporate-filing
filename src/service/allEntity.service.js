import { GETALLENTITY } from "./constants";
import apiSlice from "./api/apiSlice";

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Get ENTITY route
    getAllEntity: builder.query({
      query: () => ({
        url: GETALLENTITY,
        method: "GET",
      }),
      providesTags: ["AllEntity"],
    }),
  }),
});

export const { useGetAllEntityQuery } = userApiSlice;
