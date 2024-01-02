import { Text, View } from "react-native";
import { styles } from "../../screens/SearchDetail/StyleSDetail";

export default function ComponentSearchDetail({ selected }) {
  return (
    <View style={styles.containerText}>
      <View style={styles.centerText}>
        {/* <Text style={styles.vehicle}>{selected.driverName}</Text> */}
      </View>
      <View style={styles.centerText}>
        <Text style={styles.order}> {selected.routeSortId}</Text>
      </View>
      <View style={styles.centerText}>
        <Text style={styles.textApi}>Conductor:</Text>
        <Text style={styles.titleText}> {selected.driverName}</Text>
      </View>
      <View style={styles.centerText}>
        <Text style={styles.textApi}>Titulo:</Text>
        <Text style={styles.titleText}> {selected.taskDesc}</Text>
      </View>
      <View style={styles.centerText}>
        <Text style={styles.textApi}>Contacto:</Text>
        <Text style={styles.text}> {selected.recipientName}</Text>
      </View>
      <View style={styles.centerText}>
        <Text style={styles.textApi}>Direccion:</Text>
        <Text style={styles.text}> {selected.destinationAddress}</Text>
      </View>
      <View style={styles.centerText}>
        {/* <Text style={styles.titleText}>Reference:</Text> */}
        <Text style={styles.text}> {selected.externalKey}</Text>
      </View>
    </View>
  );
}
