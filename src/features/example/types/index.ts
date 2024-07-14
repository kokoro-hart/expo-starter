export type GetPostResponse = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type GetPostsResponse = GetPostResponse[];
