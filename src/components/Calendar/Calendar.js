import { AntDesign } from "@expo/vector-icons";
import React, { useState } from "react";
import { Modal, TouchableOpacity, View } from "react-native";
import { Calendar } from "react-native-calendars";

const CalendarShow = ({ setDate, date }) => {
  const [show, setShow] = useState(false);

  return (
    <View>
      <TouchableOpacity onPress={() => setShow(!show)}>
        <AntDesign name="calendar" size={24} color="black" />
      </TouchableOpacity>
      <Modal visible={show} animationType="fade">
        <Calendar
          style={{ borderRadius: 10, elevation: 4, margin: 40 }}
          onDayPress={(day) => {
            setDate(day.dateString);
            setShow(!show);
          }}
        />
      </Modal>
    </View>
  );
};

export default CalendarShow;
