import Axios, { AxiosError } from "axios";

type handleApiErrorOptions = {
  defaultMessage?: string;
  silent?: boolean;
};

export const handleApiError = (e: unknown | AxiosError, options: handleApiErrorOptions) => {
  const errorMessage = (() => {
    if (Axios.isAxiosError(e) && e.response?.data) {
      if (Array.isArray(e.response.data.error)) {
        e.response.data.error.forEach((error: string) => {
          return error;
        });
      } else {
        return e.response.data.error;
      }
    } else if (e instanceof Error) {
      return e.message;
    } else if (options.defaultMessage) {
      return options.defaultMessage;
    }
  })();

  if (options.silent) {
    return errorMessage;
  }

  throw new Error(errorMessage);
};
