import { StyleSheet } from "react-native";
import appColors from "../../../../../theme/appColors";
import appFonts from "../../../../../theme/appFonts";
import { windowHeight, windowWidth } from '../../../../../theme/appConstant'

const styles = StyleSheet.create({
    container: {
        height: windowHeight(12.3),
        borderRadius: 5,
    },
    innerContainer: {
        marginVertical: windowHeight(0.6),
        marginHorizontal: windowWidth(1.5),
        borderWidth: windowHeight(0.1),
        height: windowHeight(11),
        borderStyle: 'dashed',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    innerContainerImage: {
        marginVertical: windowHeight(0.7),
        marginHorizontal: windowWidth(1.5),
        borderWidth: windowHeight(0.1),
        height: windowHeight(11),
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        resizeMode: 'cover'
    },
    label: {
        color: appColors.secondaryFont,
        fontFamily: appFonts.medium,
        top:windowHeight(0.2)
    },
});

export default styles