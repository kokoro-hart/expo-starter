import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet, Pressable, Dimensions } from "react-native";

import { Modal, SuspenseWithErrorBoundary } from "@/components";

import { useGetExamples } from "../api";
import { GetExampleResponse } from "../types";

type ExampleItemProps = Pick<GetExampleResponse, "title">;

function ExampleItem({ title }: ExampleItemProps) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

export function ExampleList() {
  const { data: examples } = useGetExamples();
  return (
    <FlatList
      style={styles.list}
      data={examples}
      renderItem={({ item }) => <ExampleItem {...item} />}
      keyExtractor={({ id }) => id.toString()}
      contentContainerStyle={styles.listContent}
    />
  );
}

export function Example() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View>
      <Modal
        header={"店舗選択"}
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        contentStyles={styles.content}
      >
        <SuspenseWithErrorBoundary>
          <ExampleList />
        </SuspenseWithErrorBoundary>
      </Modal>

      <Pressable onPress={() => setModalVisible(true)}>
        <Text>Show Modal</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    width: Dimensions.get("window").width * 0.8,
    height: Dimensions.get("window").height * 0.8,
  },
  list: {
    flex: 1,
  },
  listContent: {
    display: "flex",
    flexDirection: "column",
    gap: 12,
  },
  item: {
    paddingTop: 12,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: "lightgray",
  },
  title: {
    fontSize: 16,
  },
});
