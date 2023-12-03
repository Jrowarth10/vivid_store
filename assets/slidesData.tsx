import Kotor from "@/assets/images/kotor.png";
import Stuga from "@/assets/images/stuga.png";
import Row from "@/assets/images/boy rowing.jpg";
import Moose from "@/assets/images/moose.png";
import { StaticImageData } from "next/image";

export interface Slide {
  src: StaticImageData;
  alt: string;
  title: string;
  text: string;
}

const slides: Slide[] = [
  {
    src: Kotor,
    alt: "Kotor Montenegro, painting of mountains, sea and town",
    title: "Katie G.",
    text: "“Overjoyed with my print of Kotor. It is so beautiful, I am always so excited to show it when I have guests. Thank you so much!”",
  },
  {
    src: Stuga,
    alt: "A red hut in the Swedish forest",
    title: "Jack T.",
    text: "“Ecstatic about my new print of the Swedish stuga! Thanks for creating a beautiful painting that brightens my day!”",
  },
  {
    src: Row,
    alt: "A boy rowing",
    title: "Johan S.",
    text: "“Absolutely delighted with my new painting. It is just like the photo I sent in but better! Thank you for creating such a joyful masterpiece that brings a smile to my face every day!”",
  },
  {
    src: Moose,
    alt: "A moose in the forest",
    title: "Tom R.",
    text: "I'm enchanted by my painting! Thank you for crafting this personal masterpiece that fills my home with joy and warmth!",
  },
];

export default slides;
