import React from "react";
import { View } from "react-native";
import styles from "./styles";

export function Loader() {
    return (

        <View style={styles.container}>
            <View style={styles.item}>
                <View style={styles.centerAlign}>
                    {/* <Loader view={<View style={styles.mainRound} />} /> */}
                </View>
                {/* <Loader view={<View style={styles.itemText} />} /> */}
            </View>

        </View>
    );
}