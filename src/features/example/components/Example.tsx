import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

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

export function Example() {
  const { data: posts } = useGetPosts();
  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        renderItem={({ item }) => <Item {...item} />}
        keyExtractor={({ id }) => id.toString()}
        contentContainerStyle={styles.listContents}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
  },
  listContents: {
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
