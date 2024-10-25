import { ReactElement } from "react";
import AtlassianText from "../components/Speakers/AtlassianText";
import PearlerText from "../components/Speakers/PearlerText";
import CanvaText from "../components/Speakers/CanvaText";
import MarcCheeText from "../components/Speakers/MarcCheeText";
import JobsboardText from "../components/Speakers/JobsboardText";
import AmazonText from "../components/Speakers/AmazonText";
import Macquarie24 from "../components/Speakers/Macquarie24";
import Atlassian24 from "../components/Speakers/Atlassian24";
import Placeholder from "../components/Speakers/Placeholder";
import Apple24 from "../components/Speakers/Apple24";
import Google from "../components/Speakers/Google24";
import TikTok from "../components/Speakers/TikTok24";

export const siteData: {
  [k: string]: {
    [k: string]: {
      speakerName?: string;
      text: ReactElement;
      video: string | null;
      image?: string;
    };
  };
} = {
  "2022": {
    Atlassian: {
      speakerName: "Ofir Zeevi",
      text: <AtlassianText />,
      video: "./videos/ofir.mp4",
    },
    Pearler: {
      speakerName: "Kath-Lin Han",
      text: <PearlerText />,
      video: "./videos/kathlin.mp4",
    },
    Canva: {
      speakerName: "Adam Tizzone",
      text: <CanvaText />,
      video: null,
    },
    "Marc Chee": {
      text: <MarcCheeText />,
      video: "./videos/marc.mp4",
    },
    Jobsboard: {
      speakerName: "Darian & Joanna",
      text: <JobsboardText />,
      video: "./videos/jobsboard.mp4",
    },
    Amazon: {
      speakerName: "Adam Leung",
      text: <AmazonText />,
      video: "./videos/adam-leung.mp4",
    },
  },
  "2024": {
    "Chris Peters": {
      speakerName: "Macquarie",
      text: <Macquarie24 />,
      video: null,
      image: "./images/2024/chris.JPG",
    },
    "Nick Patrikeos": {
      speakerName: "Atlassian",
      text: <Atlassian24 />,
      video: null,
      image: "./images/2024/nick.JPG",
    },
    "Nelson Tam": {
      speakerName: "Apple",
      text: <Apple24 />,
      video: null,
      image: "./images/2024/nelson.jpg",
    },
    "Richard Hofman": {
      speakerName: "Google",
      text: <Google />,
      video: null,
      image: "./images/2024/richard.png",
    },
    "James Ji": {
      speakerName: "TikTok",
      text: <TikTok />,
      video: null,
      image: "./images/2024/james.jpeg",
    },
    "More speakers": {
      speakerName: "To be announced",
      text: <Placeholder />,
      video: null,
    },
  },
};
