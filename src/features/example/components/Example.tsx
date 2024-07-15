import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

import { SuspenseWithErrorBoundary } from "@/components";

import { useGetExamples } from "../api";
import { GetExampleResponse } from "../types";

type ExampleItemProps = Pick<GetExampleResponse, "title" | "body">;

function ExampleItem({ title, body }: ExampleItemProps) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.body}>{body}</Text>
    </View>
  );
}

export function ExampleContainer() {
  const { data: posts } = useGetExamples();
  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        renderItem={({ item }) => <ExampleItem {...item} />}
        keyExtractor={({ id }) => id.toString()}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

export function Example() {
  return (
    <SuspenseWithErrorBoundary>
      <ExampleContainer />
    </SuspenseWithErrorBoundary>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
  },
  listContent: {
    display: "flex",
    flexDirection: "column",
    gap: 12,
  },
  item: {
    backgroundColor: "ghostwhite",
    padding: 20,
  },
  title: {
    fontSize: 32,
  },
  body: {
    fontSize: 16,
    color: "gray",
  },
});
