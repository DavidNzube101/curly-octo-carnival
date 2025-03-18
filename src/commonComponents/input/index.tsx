import { useTheme } from "@react-navigation/native";
import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import appColors from "../../theme/appColors";
import { useValues } from "../../utils/context";
import styles from "./styles";
import InputProps from "./types";
import { windowHeight } from "../../theme/appConstant";
import appFonts from "../../theme/appFonts";

export function Input({
  placeholder,
  keyboardType,
  value,
  warning,
  onChangeText,
  showWarning,
  icon,
  titleShow,
  title,
  backgroundColor,
  rightIcon,
  onPress,
  secureText,
  borderColor,
  style,
}: InputProps) {
  const { colors } = useTheme();
  const { textRtlStyle, viewRtlStyle, isDark } = useValues();
  return (
    <View style={styles.container}>
      {titleShow && (
        <Text
          style={{
            marginBottom: windowHeight(1),
            color: isDark ? appColors.white : appColors.primaryFont,
            fontFamily: appFonts.medium,
            textAlign: textRtlStyle,
          }}
        >
          {title}
        </Text>
      )}

      <View style={[styles.subContainer, { borderColor: borderColor ? borderColor : colors.border }]}>
        <View
          style={[styles.inputContainer, { backgroundColor: backgroundColor || (isDark ? appColors.primaryFont : appColors.graybackground) }, { flexDirection: viewRtlStyle }]}
        >
          {icon &&
            <View style={[styles.iconContainer]}>{icon}</View>}
          <TextInput
            style={[
              styles.input,
              { marginHorizontal: icon ? windowHeight(0) : windowHeight(1.5) },
              { backgroundColor: backgroundColor || (isDark ? appColors.primaryFont : appColors.graybackground), textAlign: textRtlStyle, color: isDark ? appColors.white : appColors.black },
            ]}
            placeholder={placeholder}
            placeholderTextColor={isDark ? appColors.darkText : appColors.secondaryFont}
            keyboardType={keyboardType}
            value={value}
            onChangeText={onChangeText}
            secureTextEntry={secureText}
          />
          {rightIcon && (
            <TouchableOpacity onPress={onPress} style={{marginHorizontal:windowHeight(1.5)}}>{rightIcon}</TouchableOpacity>
          )}
        </View>
      </View>
      <View style={[styles.errorContainer]}>
        {showWarning && (
          <Text style={[styles.warning, { textAlign: textRtlStyle }]}>
            {warning}
          </Text>
        )}
      </View>
    </View>
  );
}
