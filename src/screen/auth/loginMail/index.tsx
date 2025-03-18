import { View, ToastAndroid } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import styles from "../login/styles";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../navigation/main/types";
import appColors from "../../../theme/appColors";
import { Background, Header } from "../component";
import { LoginView } from "./component/";
import { useValues } from "../../../utils/context/index";
import { useDispatch, useSelector } from "react-redux";
import { UserLoginEmailInterface } from "../../../api/interface/authInterface";
import { AppDispatch } from "../../../api/store/index";
import { userMailLogin,  } from "../../../api/store/action/index";

type navigation = NativeStackNavigationProp<RootStackParamList>;

export function LoginMail() {
  const navigation = useNavigation<navigation>();
  const { isDark } = useValues();
  const dispatch = useDispatch<AppDispatch>();
  const { navigate } = useNavigation<navigation>();
  const [message, setMessage] = useState<string>("");
  const [success, setSuccess] = useState<boolean>(false);
  const [email, setEmail] = useState();
  const [demouser, setDemouser] = useState(false);
  const { translateData } = useSelector((state) => state.setting);

  const gotoRegistration = () => {
    navigation.navigate("CreateAccount");
  };

  const gotoOTP = () => {
    
    let payload: UserLoginEmailInterface = {
      email: email,
    };    
    dispatch(userMailLogin(payload))
      .unwrap()
      .then((res: any) => {   
        console.log('login mail', res);
                     
        if (res?.success) {
          navigate("OtpVerify", { email, demouser });
          ToastAndroid.showWithGravity(
            `${translateData.otpSend}`,
            ToastAndroid.SHORT,
            ToastAndroid.CENTER
          );
        } else {
          setSuccess(false);
          setMessage(res.message);
        }
      });
  };

  return (
    <View
      style={[
        styles.main,
        { backgroundColor: isDark ? appColors.primaryFont : appColors.white },
      ]}
    >
      <Header
        showBackButton={false}
        backgroundColor={isDark ? appColors.bgDark : appColors.graybackground}
      />
      <Background />
      <View style={styles.loginView}>
        <LoginView
          gotoOTP={gotoOTP}
          gotoRegistration={gotoRegistration}
          email={email}
          setEmail={setEmail}
          setDemouser={setDemouser}
        />
      </View>
    </View>
  );
}
