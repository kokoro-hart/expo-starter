import AntDesign from "@expo/vector-icons/AntDesign";
import React, { ComponentProps, PropsWithChildren } from "react";
import {
  Modal as NativeModal,
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from "react-native";

type ModalProps = PropsWithChildren<
  ComponentProps<typeof NativeModal> & {
    header?: string;
    onClose?: () => void;
    contentStyles?: StyleProp<ViewStyle>;
  }
>;

export function Modal({
  header,
  animationType = "slide",
  visible = false,
  transparent = true,
  contentStyles,
  onClose,
  children,
  ...props
}: ModalProps) {
  return (
    <NativeModal
      animationType={animationType}
      visible={visible}
      transparent={transparent}
      style={styles.modal}
      {...props}
    >
      <View style={styles.container}>
        <View style={styles.inner}>
          <View style={styles.header}>
            {header && <Text style={styles.heading}>{header}</Text>}
            {onClose && (
              <Pressable style={styles.close} onPress={onClose} aria-label={"閉じる"}>
                <AntDesign name={"close"} size={20} color={"gray"} />
              </Pressable>
            )}
          </View>
          <View style={contentStyles}>{children}</View>
        </View>
      </View>
    </NativeModal>
  );
}

const styles = StyleSheet.create({
  modal: {
    backgroundColor: "rgba(0, 0, 0, 0.2)",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.2)",
  },
  inner: {
    backgroundColor: "white",
    borderRadius: 8,
    padding: 16,
  },
  header: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: "lightgray",
  },
  heading: {
    fontSize: 16,
    fontWeight: 700,
  },
  close: {
    position: "absolute",
    right: 0,
    top: 0,
  },
});
