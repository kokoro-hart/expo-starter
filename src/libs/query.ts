import {
  QueryClient,
  UseQueryOptions,
  UseMutationOptions,
  UseInfiniteQueryOptions,
  DefaultOptions,
} from "@tanstack/react-query";
import { AxiosError } from "axios";

const queryConfig: DefaultOptions = {
  queries: {
    staleTime: 0,
    gcTime: Infinity,
    refetchOnWindowFocus: false,
    retry: false,
  },
};

export const queryClient = new QueryClient({ defaultOptions: queryConfig });

export type QueryConfig<FetcherFnType extends (...args: any) => any> = UseQueryOptions<
  Awaited<ReturnType<FetcherFnType>>
>;

export type InfiniteQueryConfig<FetcherFnType extends (...args: any) => any> =
  UseInfiniteQueryOptions<Awaited<ReturnType<FetcherFnType>>>;

export type MutationConfig<FetcherFnType extends (...args: any) => any> = UseMutationOptions<
  Awaited<ReturnType<FetcherFnType>>,
  AxiosError,
  Parameters<FetcherFnType>[0]
>;
