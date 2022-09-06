import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IDevice } from "./../types";

export const devicesAPI = createApi({
  reducerPath: "devicesAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3001",
  }),
  endpoints: (build) => ({
    fetchAllDevices: build.query<IDevice[], number>({
      query: (limit: number) => ({
        url: `devices`,
        params: {
          _limit: limit,
        },
      }),
    }),
    fetchByTypeDevices: build.query<IDevice[], string>({
      query: (type: string) => `/devices?type=${type}`,
    }),
    fetchByBrandDevices: build.query<IDevice[], string>({
      query: (brand: string) => `/devices?brand=${brand}`,
    }),
    fetchByHandleSearch: build.query<IDevice[], string>({
      query: (query: string) => `/devices?q=${query}`,
    }),
  }),
});
export const {
  useFetchAllDevicesQuery,
  useFetchByBrandDevicesQuery,
  useFetchByTypeDevicesQuery,
  useFetchByHandleSearchQuery,
} = devicesAPI;
