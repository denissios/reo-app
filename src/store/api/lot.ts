import {apiSlice} from "./index";
import {ILot} from "../types/lot";

const lotApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getLots: builder.query<ILot[], void>({
            query: () => '/lots/best',
            providesTags: ['Lots']
        })
    })
})

export const {
    useGetLotsQuery
} = lotApiSlice
