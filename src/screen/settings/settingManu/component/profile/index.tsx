import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./styles";
import { useValues } from "../../../../../utils/context";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../../navigation/main/types";
import { useNavigation, useTheme } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import appColors from "../../../../../theme/appColors";
import { walletData } from "../../../../../api/store/action/walletActions";
import { UserContainerLoader } from "./userLoader";

type navigation = NativeStackNavigationProp<RootStackParamList>;

export function Profile() {
  const { currSymbol, currValue, viewRtlStyle, textRtlStyle } = useValues();
  const { colors } = useTheme();
  const { navigate } = useNavigation<navigation>();
  const { self, loading } = useSelector((state) => state.account);
  const char = self?.name ? self.name.charAt(0) : "";
  const { walletTypedata } = useSelector((state) => state.wallet);
  const dispatch = useDispatch();
  const { translateData } = useSelector((state) => state.setting);
  const [walletLoading, setWalletLoading] = useState(true);

  useEffect(() => {
    dispatch(walletData()).then(() => setWalletLoading(false));
  }, [self]);
  return (
    <View
      style={[
        styles.main,
        { backgroundColor: colors.card, borderColor: colors.border },
      ]}
    >
      {walletLoading ? (
        <UserContainerLoader />
      ) : (
        <>
          <View style={[styles.detainContain, { flexDirection: viewRtlStyle }]}>
            {self?.profile_image?.original_url ? (
              <Image
                source={{ uri: self?.profile_image?.original_url }}
                style={styles.profileImage}
              />
            ) : (
              <View style={styles.nameTag}>
                <Text style={[styles.char, { color: appColors.white }]}>
                  {char}
                </Text>
              </View>
            )}
            <View style={styles.details}>
              <Text
                style={[
                  styles.name,
                  { color: colors.text, textAlign: textRtlStyle },
                ]}
              >
                {self?.name}
              </Text>
              <Text style={[styles.mail, { textAlign: textRtlStyle }]}>
                {self?.email}
              </Text>
            </View>
          </View>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.walletContain}
            onPress={() => navigate("MyWallet")}
            activeOpacity={0.8}
          >
            <View style={[styles.wallet, { flexDirection: viewRtlStyle }]}>
              <Text style={styles.walletTitle}>
                {translateData.walletBalance}
              </Text>
              <Text style={styles.walletAmount}>
                {currSymbol}
                {isNaN(currValue * walletTypedata)
                  ? "0"
                  : currValue * walletTypedata}
              </Text>
            </View>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}
