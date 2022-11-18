import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const fetchData = createApi({
  reducerPath: 'fetchData',
  tagTypes: ['products'],
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/' }),
  endpoints: (builder) => ({
    getFetchData: builder.query({
      query: (name) => `/${name}`,
      providesTags: ['products'],
    })
  }),
})

export const { useGetFetchDataQuery } = fetchData
export default fetchData