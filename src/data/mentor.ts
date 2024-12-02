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
        link: "https://github.com/sokpheng001",
      },
      {
        platform: "Telegram",
        icon: FaTelegramPlane,
        link: "https://t.me/sokpheng001",
      },
      {
        platform: "LinkedIn",
        icon: FaLinkedinIn,
        link: "https://www.linkedin.com/in/kim-chansokpheng-6b6513267?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      },
      {
        platform: "Email",
        icon: MdEmail,
        link: "mailto:kimchansokpheng123@gmail.com",
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
        link: "https://github.com/keoKAY",
      },
      {
        platform: "Telegram",
        icon: FaTelegramPlane,
        link: "https://t.me/keo_KAY",
      },
      {
        platform: "LinkedIn",
        icon: FaLinkedinIn,
        link: "https://www.linkedin.com/in/keo-kay-abb369187/",
      },
      {
        platform: "Email",
        icon: MdEmail,
        link: "mailto:keokay888@gmail.com",
      },
    ],
  },
];
