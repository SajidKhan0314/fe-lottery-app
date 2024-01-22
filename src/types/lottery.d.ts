interface PoolAmountProps {
  imgSrc: StaticImageData;
  amount: string;
  currency: string;
}

interface LotteryResultProps {
  roundNo: number;
  ticketNo: number[];
  amount: number;
}

interface TicketNoProps {
  ticketNo: number[];
  color: string;
}

interface PoolAmount {
  poolId: string;
  lotteryId: string;
  coinId: string;
  coinSymbol: string;
  coinName: string;
  roundId: string;
  poolAmount: string;
  createdAt: string;
}

interface Lottery {
  lotteryName: string;
  lotteryPrice: number;
  roundNumber: number;
  previousWinningticket: number[];
  poolAmount: PoolAmount[];
  winningPot: number;
  currentPool: number;
  nextDraw: number;
  ticketCount: number;
  prevTicketCount: number;
  showPoolDetail: boolean;
}
