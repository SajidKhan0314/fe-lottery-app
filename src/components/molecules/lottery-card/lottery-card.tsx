"use client";

// mui
import {
  Box,
  Button,
  Divider,
  IconButton,
  Stack,
  Typography,
  alpha,
} from "@mui/material";

//icons
import {
  IconChevron,
  IconClock,
  IconMagnifierPlus,
  IconMagnifierMinus,
} from "@icons";

// react
import { Fragment, ReactNode } from "react";

// comonents
import { LotteryResultList } from "../lottery-results/lottery-result-list";
import { LotterTicketNumber } from "components/atoms/lottery-ticket-number/lottery-ticket-number";
import { LotteryWinningPot } from "components/atoms/lottery-winning-pot/lottery-winning-pot";
import { PoolAmount } from "components/atoms/pool-amount/pool-amount";

// hook
import useLotteryCard from "./use-lottery-card";
import { getDeadTime, getTimeRemaining } from "utils/time";

// interfaces
interface LotteryCardProps extends Lottery {
  logo: ReactNode;
  color: string;
  onPlay: () => void;
}

// component
export default function LotteryCard(props: LotteryCardProps) {
  // hook
  const { open, showResults, toggleAccordion, toggleResults, getImage } =
    useLotteryCard();

  //props
  const {
    logo,
    color,
    roundNumber,
    poolAmount,
    previousWinningticket,
    winningPot,
    currentPool,
    nextDraw,
    onPlay,
  } = props;

  const deadTime = getDeadTime(nextDraw);
  const { hours, minutes, seconds } = getTimeRemaining(deadTime.toString());

  return (
    <Box borderRadius={8} overflow="hidden" bgcolor={alpha(color, 0.1)}>
      <Stack padding={16}>
        <Stack
          flexDirection="row"
          alignItems="baseline"
          justifyContent="flex-start"
          mb={24}
        >
          {logo}
          <Typography ml={12} fontWeight={500} fontSize={14} color={color}>
            {showResults ? "Past 5 Results" : `No. ${roundNumber}`}
          </Typography>
          <IconButton sx={{ ml: "auto" }} onClick={toggleResults}>
            {showResults && (
              <IconMagnifierMinus sx={styles.iconMagnifier(color)} />
            )}
            {!showResults && (
              <IconMagnifierPlus sx={styles.iconMagnifier(color)} />
            )}
          </IconButton>
        </Stack>

        {showResults && <LotteryResultList />}
        {!showResults && (
          <Fragment>
            <LotterTicketNumber
              color={color}
              ticketNo={previousWinningticket}
            />
            <LotteryWinningPot winningAmount={winningPot} />
          </Fragment>
        )}
      </Stack>
      <Stack
        padding="0.8rem 1.6rem"
        flexDirection="row"
        alignItems="center"
        bgcolor={color}
        color="white"
      >
        <Typography
          fontWeight={600}
          fontSize={14}
          textTransform="uppercase"
          mr={12}
        >
          next draw
        </Typography>
        <Stack flexDirection="row" gap={8} alignItems="center">
          <IconClock sx={styles.iconClock} />
          <Typography fontWeight={600} fontSize={20} lineHeight="24.36px">
            {hours}:{minutes}:{seconds}
          </Typography>
        </Stack>
        <Button onClick={onPlay} variant="contained" sx={styles.playBtn(color)}>
          Play
        </Button>
      </Stack>
      <Box>
        <Box sx={styles.poolStatusContainer(open)}>
          <Typography fontWeight={500} fontSize={14} mb={16}>
            Current Pool Status
          </Typography>

          <Stack gap={12}>
            {poolAmount?.map((poolAmount) => (
              <PoolAmount
                key={poolAmount.coinSymbol}
                imgSrc={getImage(poolAmount.coinSymbol)}
                amount={poolAmount.poolAmount}
                currency={poolAmount.coinSymbol}
              />
            ))}
          </Stack>

          <Divider sx={styles.divider} />
          <Stack
            flexDirection="row"
            alignItems="baseline"
            justifyContent="flex-end"
          >
            <Typography fontWeight={500} fontSize={24} color="#4A3838" mr={15}>
              &#8776;
            </Typography>
            <Typography fontWeight={700} fontSize={22} mr={4}>
              {currentPool.toLocaleString()}
            </Typography>
            <Typography
              fontWeight={400}
              fontSize={12}
              textTransform="uppercase"
            >
              LUCKI
            </Typography>
          </Stack>
        </Box>

        <Button
          startIcon={
            <IconChevron
              sx={{ width: 12, height: 9, rotate: open ? "180deg" : "0" }}
            />
          }
          onClick={toggleAccordion}
          sx={styles.accordionButton}
        >
          {open ? "Close" : "Current Pool Status"}
        </Button>
      </Box>
    </Box>
  );
}

// styles

const styles = {
  accordionButton: {
    fontWeight: 500,
    fontSize: 13,
    textTransform: "capitalize",
    color: "#3F3F3F",
    width: "100%",
  },
  divider: { bgcolor: "#3F3F3F", mb: 16 },
  iconClock: { width: 18, height: 18 },
  iconMagnifier: (color: string) => ({
    width: 16,
    height: 16,
    color,
  }),
  poolStatusContainer: (open: boolean) => ({
    padding: open ? 16 : 0,
    height: open ? "auto" : 0,
    overflow: "hidden",
  }),
  playBtn: (color: string) => ({
    fontWeight: 600,
    fontSize: 14,
    borderRadius: 4,
    padding: "0.7rem 2.6rem",
    color,
    ml: "auto",
    "&, &:hover": {
      bgcolor: "white",
    },
  }),
};
