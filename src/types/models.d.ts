export interface Post {
    title: string,
    image: string,
    author: string,
    createdAt: number,
    teaser: string,
    content: string,
    slug?: string;
    date?: string;
}

export type Posts = Post[];