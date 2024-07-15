import React, { ComponentProps } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";

type SpinnerProps = ComponentProps<typeof ActivityIndicator>;

export function Spinner(props: SpinnerProps) {
  return <ActivityIndicator {...props} />;
}

export function PageSpinner({ size = "large", ...props }: SpinnerProps) {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={size} {...props} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
});
