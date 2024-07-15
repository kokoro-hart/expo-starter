import { ComponentProps } from "react";
import NativeToast, { InfoToast, BaseToast, ErrorToast } from "react-native-toast-message";

const config = {
  info: (props: ComponentProps<typeof BaseToast>) => (
    <InfoToast {...props} style={{ borderLeftColor: "#4299e1" }} />
  ),
  success: (props: ComponentProps<typeof BaseToast>) => (
    <BaseToast {...props} style={{ borderLeftColor: "#48bb78" }} />
  ),
  error: (props: ComponentProps<typeof ErrorToast>) => (
    <ErrorToast {...props} style={{ borderLeftColor: "#f56565" }} />
  ),
};

export function Toast() {
  return <NativeToast config={config} />;
}
