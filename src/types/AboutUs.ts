export type SocialMedia = {
    platform: string;
    icon: React.ElementType;
    link: string;
};

export type AboutUs = {
    name: string;
    image: string;
    socialMedia: SocialMedia[];
};