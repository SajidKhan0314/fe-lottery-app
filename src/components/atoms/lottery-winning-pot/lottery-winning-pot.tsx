import { Stack, Typography } from "@mui/material";

export function LotteryWinningPot({
  winningAmount,
}: {
  winningAmount: number;
}) {
  return (
    <Stack flexDirection="row" alignItems="baseline" mb={16}>
      <Typography fontWeight={500} fontSize={13}>
        Winning Pot
      </Typography>
      <Typography fontWeight={700} fontSize={24} ml="auto">
        {winningAmount.toLocaleString()}
      </Typography>
      <Typography
        fontWeight={500}
        fontSize={12}
        textTransform="uppercase"
        ml={4}
      >
        LUCKI
      </Typography>
    </Stack>
  );
}
