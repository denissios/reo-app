import {fetchBaseQuery} from "@reduxjs/toolkit/query";
import {createApi} from "@reduxjs/toolkit/dist/query/react";

export const API_URL = 'https://development.alliance-eco.ru/api';

const baseQuery = fetchBaseQuery({
    baseUrl: API_URL,
    credentials: 'include',
})

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery,
    tagTypes: ['Lots'],
    endpoints: () => ({})
})
