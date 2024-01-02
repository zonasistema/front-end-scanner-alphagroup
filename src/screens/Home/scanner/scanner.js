import { useFocusEffect } from "@react-navigation/native";
import { BarCodeScanner } from "expo-barcode-scanner";
import React, { useEffect, useState } from "react";
import {
  Button,
  RefreshControl,
  ScrollView,
  Text,
  Vibration,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../../components/Loader/Loader";
import { getData, getDrivers } from "../../../redux/actions/action";
import { setResetData } from "../../../redux/states/dataSlice";
import ScannerId from "./ScannerId/ScannerId";
import styles from "./styleScanner";

export default function Scanner() {
  const [hasPermission, setHasPermission] = useState(null);
  const [refreshing, setRefreshing] = useState(false);
  const [dataQr, setDataQr] = useState({});
  const [previousDataQr, setPreviousDataQr] = useState({});
  const [destructuring, setDestructuring] = useState({ id: "" });

  const dispatch = useDispatch();

  // Función para solicitar permisos de cámara
  const askForCameraPermission = () => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  };

  // Se ejecuta al montar el componente para solicitar permisos de cámara
  useEffect(() => {
    askForCameraPermission();
  }, []);

  // Se ejecuta cuando se escanea un código de barras
  const handleBarCodeScanned = ({ type, data }) => {
    setDataQr(JSON.parse(data));
    if (
      (dataQr.id && dataQr.id !== previousDataQr.id) ||
      (dataQr.did && dataQr.did !== previousDataQr.did)
    ) {
      // Vibrar si los datos escaneados son diferentes a los anteriores
      Vibration.vibrate(500);
    }
    setPreviousDataQr(dataQr);
  };

  // Se ejecuta cuando hay cambios en los datos del código QR
  useEffect(() => {
    if (Object.keys(dataQr).length) {
      if (dataQr.id) {
        setDestructuring({ id: dataQr.id });
      }

      if (dataQr.did) {
        setDestructuring({ id: dataQr.did });
      }
    }
  }, [dataQr]);

  // Función para manejar la acción de "refresh" en ScrollView
  const onRefresh = () => {
    setRefreshing(true);
    setDestructuring({ id: "" });
    setResetData(); // Acción Redux para resetear datos
    dispatch(getData()).then(() => {
      setRefreshing(false);
    });
  };
  // Ponerle actualizado a la fecha hora que es.

  // Cuando el componente se muestra se solicitan los permisos de la camara y, cuando el componente se oculta
  // se podria detener el escaneo del código de barras para ahorrar recursos.
  useFocusEffect(
    React.useCallback(() => {
      setHasPermission(null);
      askForCameraPermission();
      return () => {
        // Se ejecuta cuando el componente pierde el foco
        // BarCodeScanner.stopAsync(); // (Comentario: Se podría detener el escáner aquí)
      };
    }, [])
  );

  // Renderizado condicional en caso de falta de permisos de camara
  if (hasPermission === null) {
    return (
      <View style={styles.container}>
        <Loader />
      </View>
    );
  }
  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text style={{ margin: 10 }}>Sin acceso a la cámara</Text>
        <Button
          title={"Permitir Cámara"}
          onPress={() => askForCameraPermission()}
        />
      </View>
    );
  }

  // Renderizar la vista principal
  return (
    <>
      <View style={styles.container}>
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          <View style={styles.barcodebox}>
            <BarCodeScanner
              onBarCodeScanned={handleBarCodeScanned}
              style={{ height: 500, width: 400 }}
            />
          </View>
          {destructuring.id !== "" ? (
            <ScannerId
              id={destructuring.id} // mando el id del qr escaneado.
              // scanned={scanned}
              // setScanned={setScanned}
            />
          ) : (
            <Text style={styles.maintext}>Sin escanear</Text>
          )}
        </ScrollView>
      </View>
    </>
  );
}
