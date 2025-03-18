import { StyleSheet } from "react-native";
import { windowHeight, windowWidth } from "../../../../../theme/appConstant";
import appColors from "../../../../../theme/appColors";
import appFonts from "../../../../../theme/appFonts";

const styles = StyleSheet.create({
    main: {
        height: windowHeight(21.5),
        width: '100%',
        marginVertical: windowHeight(1.5),
        borderRadius: windowHeight(0.9)
    },
    loaderTitle: {
        marginVertical: windowHeight(1.5),
        height: windowHeight(2.5),
        width: windowWidth(20),
        left: windowHeight(2)
    },
    title: {
        color: appColors.red,
        marginVertical: windowHeight(1.5),
        marginHorizontal: windowWidth(3),
        fontFamily: appFonts.regular
    },
    border: {
        borderBottomWidth: windowHeight(0.1),
        marginHorizontal: windowWidth(4)
    },
    loaderStyle: {
        bottom: windowHeight(2.5),
    },
})
export default styles;