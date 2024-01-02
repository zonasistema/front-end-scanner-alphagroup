import { View, Text } from "react-native";
import Search from "../../../screens/Search/Search";

export default function SearchNavigation({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <Search navigation={navigation} />
    </View>
  );
}
