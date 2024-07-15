import React, { ComponentProps } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";

type IndicatorProps = ComponentProps<typeof ActivityIndicator>;

export function Indicator(props: IndicatorProps) {
  return <ActivityIndicator {...props} />;
}

export function PageIndicator({ size = "large", ...props }: IndicatorProps) {
  return (
    <View style={styles.page}>
      <Indicator size={size} {...props} />
    </View>
  );
}

export function OverlayIndicator({ size = "large", ...props }: IndicatorProps) {
  return (
    <View style={styles.overlay}>
      <Indicator size={size} {...props} />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.2)",
  },
});
