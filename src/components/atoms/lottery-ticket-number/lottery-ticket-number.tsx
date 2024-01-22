import { Stack, Typography } from "@mui/material";

export function LotterTicketNumber({ ticketNo, color }: TicketNoProps) {
  return (
    <Stack flexDirection="row" flexWrap="wrap" gap={7} mb={16}>
      {ticketNo.map((ticketPart: number, index: number) => (
        <Stack key={ticketPart + String(index)} sx={styles.ticketPiece(color)}>
          <Typography fontWeight={600} fontSize={22} color="white">
            {ticketPart}
          </Typography>
        </Stack>
      ))}
    </Stack>
  );
}

// styles
const styles = {
  ticketPiece: (color: string) => ({
    width: 36,
    height: 36,
    borderRadius: "50%",
    bgcolor: color,
    borderWidth: 1,
    borderColor: "#00001A",
    alignItems: "center",
    justifyContent: "center",
  }),
};
