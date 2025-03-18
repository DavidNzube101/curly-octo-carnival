import { View } from 'react-native';
import React from 'react';
import RideContainer from '../../rideContainer';
import { RootStackParamList } from '../../../../navigation/main/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import appColors from '../../../../theme/appColors';
import { useValues } from '../../../../utils/context';

type CompletedRideProps = NativeStackNavigationProp<RootStackParamList>;

export function CompletedRide() {
  const { navigate } = useNavigation<CompletedRideProps>();
  const { t } = useValues();

  return (
    <View>
      <RideContainer
        status={'completed'}
        onPress={() => navigate('PendingDetails')}
        color={appColors.completeColor}
      />
    </View>
  );
};
