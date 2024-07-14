import { useSuspenseQuery } from "@tanstack/react-query";

import { QueryConfig, axios } from "@/libs";

import { GetPostsResponse } from "../types";

function getPosts(): Promise<GetPostsResponse> {
  return axios.get(`/posts`);
}

type UseGetPostsOptions = {
  config?: QueryConfig<typeof getPosts>;
};

export function useGetPosts({ config }: UseGetPostsOptions = {}) {
  return useSuspenseQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
    ...config,
  });
}
