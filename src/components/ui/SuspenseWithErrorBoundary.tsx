import { Suspense } from "react";
import type { ComponentProps, PropsWithChildren } from "react";
import ErrorBoundary from "react-native-error-boundary";

import { handleApiError } from "@/utils";

import { Error } from "./Error";
import { PageIndicator } from "./Indicator";

type SuspenseWithErrorBoundaryProps = PropsWithChildren<{
  loadingElement?: ComponentProps<typeof Suspense>["fallback"];
  fallbackComponent?: ComponentProps<typeof ErrorBoundary>["FallbackComponent"];
}>;

export function SuspenseWithErrorBoundary({
  children,
  loadingElement = <PageIndicator />,
  fallbackComponent,
}: SuspenseWithErrorBoundaryProps) {
  return (
    <ErrorBoundary
      FallbackComponent={
        fallbackComponent
          ? fallbackComponent
          : ({ error }) => {
              const errorMessage = handleApiError(error, { silent: true });
              return <Error message={errorMessage} />;
            }
      }
    >
      <Suspense fallback={loadingElement}>{children}</Suspense>
    </ErrorBoundary>
  );
}
