import { Stack } from "@mui/material";
import { LotteryResult } from "components/atoms/lottery-result/lottery-result";

export function LotteryResultList() {
  return (
    <Stack flexWrap="wrap" gap={7} mb={16}>
      <LotteryResult
        roundNo={2302123}
        ticketNo={[22, 54, 21, 56, 73, 11]}
        amount={14934000000}
      />
      <LotteryResult
        roundNo={2302123}
        ticketNo={[22, 54, 21, 56, 73, 11]}
        amount={14934000000}
      />
      <LotteryResult
        roundNo={2302123}
        ticketNo={[22, 54, 21, 56, 73, 11]}
        amount={14934000000}
      />
      <LotteryResult
        roundNo={2302123}
        ticketNo={[22, 54, 21, 56, 73, 11]}
        amount={14934000000}
      />
    </Stack>
  );
}
