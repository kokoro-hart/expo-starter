import React, { ReactNode } from "react";
import { StyleSheet, Text, View } from "react-native";

type ErrorProps = {
  heading?: string;
  message: ReactNode;
};

export function Error({ heading = "エラーが発生しました", message }: ErrorProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{heading}</Text>
      <Text style={styles.message}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
    display: "flex",
    flexDirection: "column",
    gap: 2,
  },
  heading: {
    fontSize: 16,
    textAlign: "center",
  },
  message: {
    fontSize: 14,
    textAlign: "center",
  },
});
