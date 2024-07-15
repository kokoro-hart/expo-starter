import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

import { SuspenseWithErrorBoundary } from "@/components";

import { useGetPosts } from "../api";
import { GetPostResponse } from "../types";

type ItemProps = Pick<GetPostResponse, "title" | "body">;

function Item({ title, body }: ItemProps) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.body}>{body}</Text>
    </View>
  );
}

export function ExampleContainer() {
  const { data: posts } = useGetPosts();
  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        renderItem={({ item }) => <Item {...item} />}
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
