import { Text } from "react-native";
import { View } from "react-native";
import { styles } from "../StyleSearch";
import { useSelector } from "react-redux";

export default function ViewSearch() {
  const { search } = useSelector((state) => state.search);

  return (
    <>
      <View style={styles.containerText}>
        <Text>
          <Text style={styles.titleText}>Titulo:</Text>
          <Text style={styles.textApi}> {search.taskDesc}</Text>
        </Text>
        <Text>
          <Text style={styles.titleText}>Orden:</Text>
          <Text style={styles.textApi}> {search.routeSortId}</Text>
        </Text>
        {/* <Text>
          <Text style={styles.titleText}>Vehicle:</Text>{" "}
          <Text style={styles.textApi}> {search.vehicle}</Text>
        </Text> */}
        <Text>
          <Text style={styles.titleText}>Conductor:</Text>

          <Text style={styles.textApi}> {search.driverName}</Text>
        </Text>
        <Text>
          <Text style={styles.titleText}>Direccion:</Text>
          <Text style={styles.textApi}> {search.destinationAddress}</Text>
        </Text>
        <Text>
          <Text style={styles.titleText}>Contacto:</Text>
          <Text style={styles.textApi}> {search.recipientName}</Text>
        </Text>
        <Text>
          <Text style={styles.titleText}>Reference:</Text>
          <Text style={styles.textApi}> {search.externalKey}</Text>
        </Text>
      </View>
    </>
  );
}
