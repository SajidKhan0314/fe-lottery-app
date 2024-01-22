// nextjs
import type { StaticImageData } from "next/image";

// react
import { useState } from "react";

// assets
import INAE from "@assets/images/INAE.png";
import BTC from "@assets/images/BTC.png";
import DOGE from "@assets/images/DOGE.png";
import ETH from "@assets/images/ETH.png";
import SOL from "@assets/images/SOL.png";
import TRX from "@assets/images/TRX.png";
import XRP from "@assets/images/XRP.png";

// constants
const IMAGES: Images = {
  INAE: INAE,
  BTC: BTC,
  DOGE: DOGE,
  ETH: ETH,
  SOL: SOL,
  TRX: TRX,
  XRP: XRP,
};

// interfaces
interface Images {
  [key: string]: StaticImageData;
}

export default function useLotteryCard() {
  const [open, setOpen] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const toggleAccordion = () => {
    setOpen((oldState) => !oldState);
  };

  const toggleResults = () => {
    setShowResults((oldState) => !oldState);
  };

  const getImage = (key: keyof Images) => {
    return IMAGES[key];
  };

  return {
    open,
    showResults,
    toggleAccordion,
    toggleResults,
    getImage,
  };
}
