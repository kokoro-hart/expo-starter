import Axios from "axios";
import { Suspense } from "react";
import type { PropsWithChildren, ReactNode } from "react";
import ErrorBoundary from "react-native-error-boundary";

import { Error } from "./Error";
import { PageSpinner } from "./Spinner";

type SuspenseWithErrorBoundaryProps = PropsWithChildren<{
  loadingElement?: ReactNode;
  fallbackComponent?: ReactNode;
}>;

export function SuspenseWithErrorBoundary({
  children,
  loadingElement = <PageSpinner />,
  fallbackComponent,
}: SuspenseWithErrorBoundaryProps) {
  return (
    <ErrorBoundary
      FallbackComponent={
        fallbackComponent
          ? () => <>{fallbackComponent}</>
          : ({ error }) => {
              const errorMessage = (() => {
                if (Axios.isAxiosError(error) && error.response?.data) {
                  if (Array.isArray(error.response.data.error)) {
                    error.response.data.error.forEach((e: string) => {
                      return e;
                    });
                  } else {
                    return error.response.data.error;
                  }
                } else if (error instanceof Error) {
                  return error.message;
                }
              })();

              return <Error message={errorMessage} />;
            }
      }
    >
      <Suspense fallback={loadingElement}>{children}</Suspense>
    </ErrorBoundary>
  );
}
