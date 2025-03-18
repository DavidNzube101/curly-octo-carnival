import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Icons from '../../../../../utils/icons/icons'
import styles from './styles'
import { useValues } from '../../../../../utils/context'
import { useNavigation, useTheme } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../navigation/main/types';
import { useSelector } from 'react-redux'

type navigation = NativeStackNavigationProp<RootStackParamList>;

export function SettingHeader() {
    const { colors } = useTheme();
    const { viewRtlStyle } = useValues();
    const { navigate } = useNavigation<navigation>();
    const { translateData } = useSelector((state) => state.setting);

    const gotoNotification = () => {
        navigate('Notification')
    }
    return (
        <View style={[styles.main, { backgroundColor: colors.card, flexDirection: viewRtlStyle }]}>
            <Text style={[styles.title, { color: colors.text }]}>{translateData.settings}</Text>
            <TouchableOpacity onPress={gotoNotification} style={[styles.iconView, { borderColor: colors.border }]} activeOpacity={0.5}>
                <Icons.Notification color={colors.text} />
            </TouchableOpacity>
        </View>
    )
}