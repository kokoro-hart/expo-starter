import Axios, { AxiosError } from "axios";
import Toast from "react-native-toast-message";

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
        return e.response.data.error || e.message;
      }
    } else if (options.defaultMessage) {
      return options.defaultMessage;
    }
  })();

  if (options.silent) {
    return errorMessage;
  }

  Toast.show({
    type: "error",
    text1: "エラーが発生しました",
    text2: errorMessage,
  });

  console.error(e);
  throw new Error(errorMessage);
};
