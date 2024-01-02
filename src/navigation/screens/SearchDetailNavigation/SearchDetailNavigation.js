import { View } from "react-native";
import SearchDetail from "../../../screens/SearchDetail/SearchDetail";

export default function SearchDetailNavigation({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <SearchDetail navigation={navigation} />
    </View>
  );
}
