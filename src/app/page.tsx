"use client";

// mui
import { Container, IconButton, Stack, Typography } from "@mui/material";

// nextjs
import { useRouter } from "next/navigation";

// api
import { useGetLotteryQuery } from "services/lottery-api";

// components
import { IconMenu } from "@icons";
import { AtomicLogo, ClassicLogo, CosmicLogo } from "components/logos";
import LotteryCard from "components/molecules/lottery-card/lottery-card";

export default function Home() {
  // hooks
  const router = useRouter();

  // APIs
  const { data: cosmicData, isLoading: isLoadingCosmicData } =
    useGetLotteryQuery("COSMIC", { pollingInterval: 2000 });
  const { data: classicData, isLoading: isLoadingClassicData } =
    useGetLotteryQuery("CLASSIC", { pollingInterval: 2000 });
  const { data: atomicData, isLoading: isLoadingAtomicData } =
    useGetLotteryQuery("ATOMIC", { pollingInterval: 2000 });

  // functions
  const onPlay = () => {
    // if login play
    // we will be going to login since we are not implementing authentication
    router.push("/login");
  };

  return (
    <main>
      <Container maxWidth="sm">
        <Stack
          flexDirection="row"
          alignItems="center"
          minHeight="60px"
          mb="13px"
        >
          <IconButton sx={{ width: 40, height: 40, color: "black" }}>
            <IconMenu />
          </IconButton>
          <Typography
            fontWeight={700}
            fontSize={22}
            lineHeight="26.63px"
            textAlign="center"
            width="100%"
          >
            Lottery
          </Typography>
        </Stack>
        <Typography fontWeight={700} fontSize={21} lineHeight="25.58px">
          Latest Results
        </Typography>
        <Stack mt={16} gap={16}>
          {isLoadingCosmicData && (
            <Typography variant="h3">Loading Cosmic..</Typography>
          )}
          {cosmicData && (
            <LotteryCard
              logo={<CosmicLogo sx={styles.logo("#961A88")} />}
              color="#961A88"
              onPlay={onPlay}
              {...cosmicData.data}
            />
          )}
          {isLoadingClassicData && (
            <Typography variant="h3">Loading Classic..</Typography>
          )}
          {classicData && (
            <LotteryCard
              logo={<ClassicLogo sx={styles.logo("#191978")} />}
              color="#191978"
              onPlay={onPlay}
              {...classicData.data}
            />
          )}
          {isLoadingAtomicData && (
            <Typography variant="h3">Loading Atomic..</Typography>
          )}
          {atomicData && (
            <LotteryCard
              logo={<AtomicLogo sx={styles.logo("#00AEB1")} />}
              color="#00AEB1"
              onPlay={onPlay}
              {...atomicData.data}
            />
          )}
        </Stack>
      </Container>
    </main>
  );
}

// styles
const styles = {
  logo: (color: string) => ({ height: 16, width: "auto", color }),
};
