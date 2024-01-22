import { baseAPI } from "./base-api";

export const lotteryAPI = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getLottery: builder.query<LotteryAPIResponse, string>({
      query: (lotteryType) => ({
        url: `/luckito/lottery/get-lottery`,
        params: { lotteryType },
      }),
    }),
  }),
});

export const { useGetLotteryQuery } = lotteryAPI;
