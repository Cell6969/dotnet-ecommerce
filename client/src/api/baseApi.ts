import {
  BaseQueryApi,
  FetchArgs,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query";
import { startLoading, stopLoading } from "../store/slice/uiSlice";

const customBaseQuery = fetchBaseQuery({
  baseUrl: "https://localhost:5227/api",
});

const sleep = () => new Promise((resolve) => setTimeout(resolve, 1000));

export const baseQueryWithErrorHandling = async (
  args: string | FetchArgs,
  api: BaseQueryApi,
  extraOptions: object
) => {
    api.dispatch(startLoading())
    // start loading
    await sleep();
    const result = await customBaseQuery(args, api, extraOptions);
    // stop loading
    api.dispatch(stopLoading())
    if (result.error) {
        const {status, data} = result.error;
        console.log({status, data})
    };

    return result;
};
