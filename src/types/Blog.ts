export type User = {
    uuid: string;
    firstName: string;
    lastName: string;
    profile: string;
    bio: string;
};

export type Blog = {
    uuid: string;
    title: string;
    likesCount: number;
    viewsCount: number;
    countComments: number;
    isVerified: boolean;
    description: string;
    thumbnail: string[];
    user: User;
    createdAt: string;
    lastModifiedAt: string;
};