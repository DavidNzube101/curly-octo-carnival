import { StyleSheet } from "react-native";
import appColors from "../../../../theme/appColors";
import { windowHeight, windowWidth } from "../../../../theme/appConstant";

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: appColors.white
    },
    sub: {
        minHeight: '100%'
    },
    spaceHorizantal: {
        marginHorizontal: windowWidth(4)
    },
    buttonView: {
        marginVertical: windowHeight(2.5),
    },
    titleText: {
        color: appColors.red
    },
    dateContainer: {
        marginBottom: windowHeight(3),
    }
})
export default styles