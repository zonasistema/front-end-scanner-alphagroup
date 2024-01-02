import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { useDispatch } from "react-redux";
import { setSelected } from "../../../redux/states/searchSlice";
import { styles } from "./StyleVNOA";

export default function ViewNameOrAddres({ nameOrAddress, navigation }) {
  const dispatch = useDispatch();

  // Selecciono el paquete que quiero ver en detalle.
  const handlePress = (item) => {
    const findSelected = nameOrAddress.find(
      (select) => select.reference === item.reference
    );
    if (findSelected) dispatch(setSelected(findSelected));

    navigation.navigate("selected");
  };

  // Renderizo los paquetes encotnrados por nombre o direccion
  return (
    <FlatList
      data={nameOrAddress}
      ItemSeparatorComponent={() => <Text> </Text>}
      renderItem={({ item: search }) => {
        return (
          <TouchableOpacity onPress={() => handlePress(search)}>
            <View key={nameOrAddress.id} style={styles.cards}>
              <View style={styles.text}>
                <Text style={styles.titleText}>
                  {/* {search.guid} - */} {search.routeSortId} -{" "}
                  {search.driverName}
                </Text>
              </View>
              <Text style={styles.view}>
                <Text style={styles.title}>Titulo:</Text>

                <Text style={styles.titleText}> {search.taskDesc}</Text>
              </Text>
              <Text style={styles.view}>
                <Text style={styles.title}>Direccion:</Text>

                <Text style={styles.titleText}>
                  {" "}
                  {search.destinationAddress}
                </Text>
              </Text>
            </View>
          </TouchableOpacity>
        );
      }}
    />
  );
}
