import { View, Text } from "react-native";
import Home from "../../../screens/Home/Home";

export default function HomeNavigation({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <Home />
    </View>
  );
}
