import { View, Text, ToastAndroid } from "react-native";
import React, { useEffect, useState } from "react";
import Icons from "../../../../../utils/icons/icons";
import { ListItem } from "../";
import appColors from "../../../../../theme/appColors";
import { useValues } from "../../../../../utils/context";
import { useNavigation, useTheme } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { clearValue } from "../../../../../utils/localstorage";
import { resetState } from "../../../../../api/store/reducers";
import { deleteProfile, settingDataGet } from "../../../../../api/store/action";
import styles from "./styles";
import { useLoadingContext } from "../../../../../utils/loadingContext";
import { SkeletonAppPage } from "../../../appSettings/component";
import { windowHeight, windowWidth } from "../../../../../theme/appConstant";
import ContentLoader, { Rect } from "react-content-loader/native";

export function AlertZone() {
  const { textRtlStyle, isDark } = useValues();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { colors } = useTheme();
  const [loading, setLoading] = useState(false);
  const { addressLoaded, setAddressLoaded } = useLoadingContext();
  const { settingData, translateData } = useSelector((state) => state.setting);

  useEffect(() => {
    if (!addressLoaded) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setAddressLoaded(true);
      }, 3000);
    }
  }, [addressLoaded, setAddressLoaded]);

  const deleteAccount = () => {
    ToastAndroid.showWithGravity(
      "Account Deleted Successfully",
      ToastAndroid.SHORT,
      ToastAndroid.CENTER
    );
    if (settingData?.values?.activation?.login_number == 1) {
      navigation.reset({
        index: 0,
        routes: [{ name: "Login" }],
      });
      clearValue();
      dispatch(deleteProfile());
      dispatch(settingDataGet());
    } else if (settingData?.values?.activation?.login_number == 0) {
      navigation.reset({
        index: 0,
        routes: [{ name: "LoginMail" }],
      });
      clearValue();
      dispatch(deleteProfile());
      dispatch(settingDataGet());
    }
  };

  const gotoLogout = () => {
    ToastAndroid.showWithGravity(
      "Logged Out Successfully",
      ToastAndroid.SHORT,
      ToastAndroid.CENTER
    );

    if (settingData?.values?.activation?.login_number == 1) {
      navigation.reset({
        index: 0,
        routes: [{ name: "Login" }],
      });
      clearValue();
      dispatch(resetState());
      dispatch(settingDataGet());
    } else if (settingData?.values?.activation?.login_number == 0) {
      navigation.reset({
        index: 0,
        routes: [{ name: "LoginMail" }],
      });
      clearValue();
      dispatch(resetState());
      dispatch(settingDataGet());
    }
  };

  const skeletonTitle = () => (
    <ContentLoader
      speed={1}
      width={windowWidth(100)}
      height={windowHeight(8)}
      viewBox={`0 0 ${windowWidth(100)} ${windowHeight(8)}`}
      backgroundColor={isDark ? appColors.bgDark : appColors.loaderBackground}
      foregroundColor={
        isDark ? appColors.darkThemeSub : appColors.loaderLightHighlight
      }
    >
      <Rect
        x={windowWidth(4)}
        y={windowHeight(1.5)}
        rx={0}
        ry={0}
        width={windowWidth(32)}
        height={windowHeight(2.5)}
      />
    </ContentLoader>
  );

  return (
    <View style={[styles.main, { backgroundColor: appColors.white }]}>
      {loading ? (
        skeletonTitle()
      ) : (
        <Text style={[styles.title, { textAlign: textRtlStyle }]}>
          {translateData.alertZone}
        </Text>
      )}

      {loading ? (
        Array.from({ length: 2 }).map((_, index) => (
          <View key={index} style={styles.loaderStyle}>
            <SkeletonAppPage />
            <View>
              <View style={[styles.border, { borderColor: colors.border }]} />
            </View>
          </View>
        ))
      ) : (
        <>
          <ListItem
            icon={<Icons.Delete />}
            text={translateData.deleteAccount}
            backgroundColor={appColors.alertIconBg}
            color={appColors.red}
            onPress={deleteAccount}
          />
          <View
            style={[styles.border, { borderColor: appColors.alertBorder }]}
          />
          <ListItem
            icon={<Icons.Logout />}
            text={translateData.logout}
            backgroundColor={appColors.alertIconBg}
            color={appColors.red}
            onPress={gotoLogout}
          />
        </>
      )}
    </View>
  );
}
