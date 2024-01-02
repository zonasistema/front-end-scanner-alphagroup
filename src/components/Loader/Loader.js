import React from "react";
import { ActivityIndicator, SafeAreaView } from "react-native";

const Loader = () => {
  return (
    <SafeAreaView>
      <ActivityIndicator size="large" />
    </SafeAreaView>
  );
};

export default Loader;
