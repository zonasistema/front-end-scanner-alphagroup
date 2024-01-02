import { FontAwesome } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import CalendarShow from "../../components/Calendar/Calendar";
import Loader from "../../components/Loader/Loader";
import { getNameOrAddress, getSearch } from "../../redux/actions/action";
import { setReset, setResetNOA } from "../../redux/states/searchSlice";
import { styles } from "./StyleSearch";
import ViewNameOrAddres from "./ViewNameOrAddres/ViewNameOrAddres";
import ViewSearch from "./ViewSearch/ViewSearch";
import { Ionicons } from "@expo/vector-icons";

export default function Search({ navigation }) {
  const [searchByNameOrAddress, setSearchByNameOrAddress] = useState("");
  const [refreshing, setRefreshing] = useState(false);
  const [reference, setReference] = useState("");
  const [sumbit, setSumbit] = useState(false);
  const [date, setDate] = useState("");

  const nameOrAddress = useSelector((state) => state.search.nameOrAddress);
  const { search } = useSelector((state) => state.search);
  const dispatch = useDispatch();

  const handleChange = (text) => {
    setSearchByNameOrAddress(text);
    const test = text.split("").every((char) => !isNaN(char));

    if (test) setReference(text);
    if (!test) setReference("");
  };

  const handleSumbit = (e) => {
    setSumbit(true);
    e.preventDefault();
    if (reference) {
      // Esto era cuando buscabamos por el reference, lo dejo por si lo queremos implementar de nuevo.
      // dispatch(getSearch(reference, date));
      // navigation.navigate("selected");
    }
    if (!reference)
      // Concateno la fecha para que me traiga lo ultimo de lo ultimo.
      dispatch(
        getNameOrAddress(searchByNameOrAddress, date.concat("T23:59:59.999Z"))
      )
        .then(() => setSumbit(false))
        .catch(() => setSumbit(false));
  };

  useEffect(() => {
    setSumbit(false);
    setReference("");
    setSearchByNameOrAddress("");
  }, [search, date, nameOrAddress]);

  const onRefresh = async () => {
    setRefreshing(true);
    await dispatch(setReset({}));
    await dispatch(setResetNOA([]));
    setRefreshing(false);
  };

  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1;
  const day = currentDate.getDate();

  if (!date) setDate(`${year}-${month}-${day}`);

  return (
    <>
      <View style={styles.container}>
        <View style={{ marginTop: 20, marginLeft: -10, marginRight: 10 }}>
          <TouchableOpacity onPress={onRefresh}>
            <Ionicons name="reload" size={24} color="black" />
          </TouchableOpacity>
        </View>

        <TextInput
          placeholder="Ej: Marcos, puente alto"
          onChangeText={(text) => handleChange(text)}
          style={styles.input}
          value={searchByNameOrAddress}
          onSubmitEditing={handleSumbit}
        />
        <TouchableOpacity
          style={styles.buttonSearch}
          onPress={(e) => handleSumbit(e)}
        >
          <FontAwesome name="search" size={24} color="black" />
        </TouchableOpacity>
        <View style={styles.calendar}>
          <CalendarShow date={date} setDate={setDate} />
        </View>
      </View>

      {sumbit ? (
        <View>
          <Loader />
        </View>
      ) : search.msg || nameOrAddress.msg ? (
        <>
          {/* Verifico que no tenga un msg -> eso significa que es un error. Porque los errores llegan asi: {msg: 'cadvevsv'} */}
          <View style={{ alignItems: "center", marginBottom: 10 }}>
            <Text style={{ color: "#000" }}>{date}</Text>
          </View>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginTop: 225,
            }}
          >
            <Text
              style={{
                fontSize: 20,
              }}
            >
              No se encontro
            </Text>
          </View>
        </>
      ) : nameOrAddress.length ? (
        <>
          {/* Aca puedo ser que no haya habido un error pero pregunto si hay algo para renderizar */}
          <View style={{ alignItems: "center", marginBottom: 10 }}>
            <Text style={{ color: "#000" }}>{date}</Text>
          </View>
          {/* Componente que renderiza los paquetes encontrados */}
          <ViewNameOrAddres
            nameOrAddress={nameOrAddress}
            navigation={navigation}
            reference={reference}
            date={date}
          />
        </>
      ) : Object.keys(search).length ? (
        <>
          {/* Por ahora no cumple ninguna funcion, es de la funcion getSearch. Pero por las dudas no lo borro */}
          <View style={{ alignItems: "center", marginBottom: 10 }}>
            <Text style={{ color: "#000" }}>{date}</Text>
          </View>
          <ViewSearch />
        </>
      ) : (
        <View style={{ alignItems: "center" }}>
          <View style={{ alignItems: "center", marginBottom: 10 }}>
            <Text style={{ color: "#000" }}>{date}</Text>
          </View>
          <Text style={{ fontSize: 16 }}>No hay nada</Text>
        </View>
      )}
    </>
  );
}
