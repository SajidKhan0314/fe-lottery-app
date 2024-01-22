// mui
import { Box, Stack, Typography } from "@mui/material";

// nextjs
import Image from "next/image";

export function PoolAmount({ imgSrc, amount, currency }: PoolAmountProps) {
  return (
    <Stack
      flexDirection="row"
      alignItems="baseline"
      justifyContent="space-between"
    >
      <Image src={imgSrc} alt={currency} width={16} height={16} />
      <Typography fontWeight={400} fontSize={16}>
        {amount.toLocaleString()}
        <Typography
          component="span"
          textTransform="uppercase"
          fontWeight={400}
          fontSize={16}
          ml={4}
        >
          {currency}
        </Typography>
      </Typography>
    </Stack>
  );
}
