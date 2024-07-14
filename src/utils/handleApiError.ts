import Axios, { AxiosError } from "axios";

export const handleApiError = (e: unknown | AxiosError, defaultError?: string) => {
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
    } else if (defaultError) {
      return defaultError;
    }
  })();

  throw new Error(errorMessage);
};
