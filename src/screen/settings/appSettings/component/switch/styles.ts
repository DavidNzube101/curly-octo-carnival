import { StyleSheet } from "react-native";
import { windowHeight, windowWidth } from "../../../chat/context";

const styles = StyleSheet.create({
    containerStyles: {
        width: windowWidth(55),
        height: windowHeight(20),
        borderRadius: windowHeight(10),
        padding: windowHeight(4.3),
    },
    circleStyles: {
        width: windowHeight(12),
        height: windowWidth(18),
        borderRadius: windowHeight(6),
    }
})
export default styles;