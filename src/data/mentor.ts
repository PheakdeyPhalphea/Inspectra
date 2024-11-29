import { FaGithub, FaTelegramPlane, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

type SocialMedia = {
  platform: string;
  icon: React.ElementType;
  link: string;
};

type Mentor = {
  name: string;
  image: string;
  socialMedia: SocialMedia[];
};

export const mentorData: Mentor[] = [
  {
    name: "Kim Chansokpheng",
    image: "/images/Cher-Pheng-Remove-BG.png",
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
    name: "kay Keo",
    image: "/images/Cher-Keo-RM-BG.png",
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
