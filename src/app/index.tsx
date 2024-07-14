import React, { Suspense } from "react";
import { ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Example } from "@/features/example/components";

export default function Index() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Suspense fallback={<ActivityIndicator />}>
        <Example />
      </Suspense>
    </SafeAreaView>
  );
}
