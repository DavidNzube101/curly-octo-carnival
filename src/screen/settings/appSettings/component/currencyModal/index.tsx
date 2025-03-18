import React, { useState } from "react";
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Image,
  TouchableOpacity,
  Modal,
} from "react-native";
import { CustomRadioButton } from "../../../../../commonComponents";
import Icons from "../../../../../utils/icons/icons";
import styles from "./styles";
import { currency } from "./data";
import { useValues } from "../../../../../utils/context";
import { useTheme } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useSelector } from "react-redux";

export function CurrencyModal() {
  const [currencymodalVisible, setCurrencyModalVisible] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState("US dollar");
  const { setCurrSymbol, setCurrValue } = useValues();
  const { colors } = useTheme();
  const { viewRtlStyle, viewSelfRtlStyle } = useValues();
  const { translateData } = useSelector((state) => state.setting);

  const openCurrencyModal = () => {
    setCurrencyModalVisible(true);

    const getData = async () => {
      try {
        const selectedCurrency = await AsyncStorage.getItem("selectedCurrency");
        if (selectedCurrency !== null) {
          setSelectedCurrency(selectedCurrency);
        } else {
        }
      } catch (error) {
        console.error("Error retrieving selected currency:", error);
      }
    };
    getData();
  };

  const closeCurrencyModal = () => {
    setCurrencyModalVisible(false);
    const selectedOption = currency.find(
      (option) => option.name === selectedCurrency
    );

    if (selectedOption) {
      setCurrSymbol(selectedOption.currSymbol);
      setCurrValue(selectedOption.currValue);
      setSelectedCurrency(selectedOption.name);

      AsyncStorage.setItem("selectedSymbol", selectedOption.currSymbol);
      AsyncStorage.setItem(
        "selectedValue",
        selectedOption.currValue.toString()
      );
      AsyncStorage.setItem("selectedCurrency", selectedOption.name).then(
        () => {}
      );
    }
  };

  return (
    <View>
      <View style={[styles.border, { borderColor: colors.border }]} />
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={openCurrencyModal}
        style={[styles.main, { flexDirection: viewRtlStyle }]}
      >
        <View style={[styles.container, { flexDirection: viewRtlStyle }]}>
          <View
            style={[styles.iconView, { backgroundColor: colors.background }]}
          >
            <Icons.Currency color={colors.text} />
          </View>
          <Text style={[styles.title, { color: colors.text }]}>
            {translateData.changeCurrency}
          </Text>
        </View>
        <View>
          <Icons.NextLarge color={colors.text} />
        </View>
      </TouchableOpacity>
      <Modal
        animationType="none"
        transparent={true}
        visible={currencymodalVisible}
        onRequestClose={closeCurrencyModal}
      >
        <TouchableWithoutFeedback onPress={closeCurrencyModal}>
          <View style={styles.modalBg}>
            <TouchableWithoutFeedback>
              <View
                style={[styles.modalView, { backgroundColor: colors.card }]}
              >
                <TouchableOpacity
                  onPress={closeCurrencyModal}
                  style={{ alignSelf: viewSelfRtlStyle }}
                >
                  <Icons.Close />
                </TouchableOpacity>

                <Text style={[styles.modalTitle, { color: colors.text }]}>
                  {translateData.changeCurrency}
                </Text>
                {currency?.map((item, index) => (
                  <View key={index}>
                    <View
                      style={[
                        styles.modalAlign,
                        { flexDirection: viewRtlStyle },
                      ]}
                    >
                      <View
                        style={[
                          styles.selection,
                          { flexDirection: viewRtlStyle },
                        ]}
                      >
                        <Image
                          source={item.image}
                          style={styles.imageCountry}
                        />
                        <Text
                          style={[
                            styles.name,
                            {
                              color: colors.text,
                              fontWeight:
                                selectedCurrency === item.name ? "500" : "300",
                            },
                          ]}
                        >
                          {item.name}
                        </Text>
                      </View>
                      <CustomRadioButton
                        selected={selectedCurrency === item.name}
                        onPress={() => setSelectedCurrency(item.name)}
                      />
                    </View>
                    {index !== currency.length - 1 && (
                      <View
                        style={[
                          styles.borderBottom,
                          { borderColor: colors.border },
                        ]}
                      />
                    )}
                  </View>
                ))}
                <TouchableOpacity
                  onPress={closeCurrencyModal}
                  style={styles.buttonView}
                >
                  <Text style={styles.buttonTitle}>{translateData.update}</Text>
                </TouchableOpacity>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
}
