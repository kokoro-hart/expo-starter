import { SafeAreaView } from "react-native-safe-area-context";

import { Example } from "@/features/example/components";

export { ErrorBoundary } from "expo-router";

export default function Index() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Example />
    </SafeAreaView>
  );
}
