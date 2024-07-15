import { useSuspenseQuery } from "@tanstack/react-query";

import { QueryConfig, axios } from "@/libs";

import { GetExamplesResponse } from "../types";

function getExamples(): Promise<GetExamplesResponse> {
  return axios.get(`/posts`);
}

type UseGetExamplesOptions = {
  config?: QueryConfig<typeof getExamples>;
};

export function useGetExamples({ config }: UseGetExamplesOptions = {}) {
  return useSuspenseQuery({
    queryKey: ["examples"],
    queryFn: getExamples,
    ...config,
  });
}
