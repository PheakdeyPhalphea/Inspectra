import { FaGithub, FaTelegramPlane, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

type SocialMedia = {
  platform: string;
  icon: React.ElementType;
  link: string;
};

type Team = {
  name: string;
  image: string;
  socialMedia: SocialMedia[];
};

export const teamData: Team[] = [
  {
    name: "Phiv Lyhou",
    image: "/images/lyhou.jpg",
    socialMedia: [
      {
        platform: "GitHub",
        icon: FaGithub, 
        link: "https://github.com/lyhou123",
      },
      {
        platform: "Telegram",
        icon: FaTelegramPlane,
        link: "https://t.me/phivlyhou",
      },
      {
        platform: "LinkedIn",
        icon: FaLinkedinIn,
        link: "https://www.linkedin.com/in/phiv-lyhou-870447299/",
      },
      {
        platform: "Email",
        icon: MdEmail,
        link: "mailto:lyhou282@gmail.com",
      },
    ],
  },
  {
    name: "Hom Pheakakvotey",
    image: "/images/votey.jpg",
    socialMedia: [
      {
        platform: "GitHub",
        icon: FaGithub, 
        link: "https://github.com/HomPheakakvotey",
      },
      {
        platform: "Telegram",
        icon: FaTelegramPlane,
        link: "https://t.me/vvotey",
      },
      {
        platform: "LinkedIn",
        icon: FaLinkedinIn,
        link: "https://www.linkedin.com/in/hom-pheakakvotey-2285a6244",
      },
      {
        platform: "Email",
        icon: MdEmail,
        link: "mailto:voteyhom@gmail.com",
      },
    ],
  },
  {
    name: "Leang Helen",
    image: "/images/helen.jpg",
    socialMedia: [
      {
        platform: "GitHub",
        icon: FaGithub, 
        link: "https://github.com/Hemechi",
      },
      {
        platform: "Telegram",
        icon: FaTelegramPlane,
        link: "https://t.me/helen_leang",
      },
      {
        platform: "LinkedIn",
        icon: FaLinkedinIn,
        link: "https://www.linkedin.com/in/helen-leang-34875533b/",
      },
      {
        platform: "Email",
        icon: MdEmail,
        link: "mailto:helen.leang15@gmail.com",
      },
    ],
  },
  {
    name: "Phalphea Pheakdey",
    image: "/images/kdey.jpg",
    socialMedia: [
      {
        platform: "GitHub",
        icon: FaGithub, 
        link: "https://github.com/PheakdeyPhalphea",
      },
      {
        platform: "Telegram",
        icon: FaTelegramPlane,
        link: "https://t.me/PhalPheaPheakdey",
      },
      {
        platform: "LinkedIn",
        icon: FaLinkedinIn,
        link: "https://www.linkedin.com/in/phalphea-pheakdey?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      },
      {
        platform: "Email",
        icon: MdEmail,
        link: "mailto:phalpheapheakdey@gmail.com",
      },
    ],
  },
  {
    name: "Ing Davann",
    image: "/images/davann.jpg",
    socialMedia: [
      {
        platform: "GitHub",
        icon: FaGithub, 
        link: "https://github.com/ingdavann",
      },
      {
        platform: "Telegram",
        icon: FaTelegramPlane,
        link: "https://t.me/ingdavann",
      },
      {
        platform: "LinkedIn",
        icon: FaLinkedinIn,
        link: "http://www.linkedin.com/in/ing-davann-0617b32a3",
      },
      {
        platform: "Email",
        icon: MdEmail,
        link: "mailto:ingdavann4444@gmail.com",
      },
    ],
  },
];
