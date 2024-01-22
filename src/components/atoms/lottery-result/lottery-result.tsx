import { Stack, Typography } from "@mui/material";

export function LotteryResult({
  roundNo,
  ticketNo,
  amount,
}: LotteryResultProps) {
  return (
    <Stack
      flexDirection="row"
      alignItems="baseline"
      justifyContent="space-between"
    >
      <Typography fontWeight={600} fontSize={13}>
        {roundNo}
      </Typography>
      <Typography fontWeight={600} fontSize={13}>
        {ticketNo.join(" ")}
      </Typography>
      <Typography fontWeight={600} fontSize={13}>
        {amount.toLocaleString()}
      </Typography>
    </Stack>
  );
}
