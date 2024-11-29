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
        link: "https://github.com/kimchansokpheng",
      },
      {
        platform: "Telegram",
        icon: FaTelegramPlane,
        link: "https://t.me/kimchansokpheng",
      },
      {
        platform: "LinkedIn",
        icon: FaLinkedinIn,
        link: "https://www.linkedin.com/in/kim-chansokpheng-0b3b0b1a4/",
      },
      {
        platform: "Email",
        icon: MdEmail,
        link: "mailto:kim.chansokpheng@example.com",
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
        link: "https://github.com/kaykeo",
      },
      {
        platform: "Telegram",
        icon: FaTelegramPlane,
        link: "https://t.me/kaykeo",
      },
      {
        platform: "LinkedIn",
        icon: FaLinkedinIn,
        link: "https://www.linkedin.com/in/kaykeo-0b3b0b1a4/",
      },
      {
        platform: "Email",
        icon: MdEmail,
        link: "mailto:kaykeo@example.com",
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
        link: "https://www.linkedin.com/in/helen-0b3b0b1a4/",
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
        link: "https://github.com/kaykeo",
      },
      {
        platform: "Telegram",
        icon: FaTelegramPlane,
        link: "https://t.me/kaykeo",
      },
      {
        platform: "LinkedIn",
        icon: FaLinkedinIn,
        link: "https://www.linkedin.com/in/kaykeo-0b3b0b1a4/",
      },
      {
        platform: "Email",
        icon: MdEmail,
        link: "mailto:kaykeo@example.com",
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
        link: "https://github.com/kaykeo",
      },
      {
        platform: "Telegram",
        icon: FaTelegramPlane,
        link: "https://t.me/kaykeo",
      },
      {
        platform: "LinkedIn",
        icon: FaLinkedinIn,
        link: "https://www.linkedin.com/in/kaykeo-0b3b0b1a4/",
      },
      {
        platform: "Email",
        icon: MdEmail,
        link: "mailto:kaykeo@example.com",
      },
    ],
  },
];
