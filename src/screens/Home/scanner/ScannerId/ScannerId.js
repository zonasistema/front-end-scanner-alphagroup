import React, { useEffect } from "react";
import { Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../../../components/Loader/Loader";
import { setDataId } from "../../../../redux/states/dataSlice";
import ComponentSearchDetail from "../../../../components/Search/ComponentSearchDetail";

const ScannerId = ({ id, scanned, setScanned }) => {
  const dataId = useSelector((state) => state.data.dataId);
  const dispatch = useDispatch();

  // Guardo el id en el estado global
  useEffect(() => {
    dispatch(setDataId(id));
  }, [id]);

  return (
    <View>
      {!Object.keys(dataId).length ? (
        <Loader />
      ) : dataId.msg ? (
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              fontSize: 25,
              color: "#000",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {dataId.msg}
          </Text>
        </View>
      ) : (
        <ComponentSearchDetail selected={dataId} />
      )}
    </View>
  );
};

export default ScannerId;
