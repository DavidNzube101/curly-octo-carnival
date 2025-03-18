import React, { useEffect } from 'react';
import Navigation from './src/navigation';
import { AppContextProvider } from './src/utils/context';
import { Provider } from 'react-redux';
import store from './src/api/store';
import { MenuProvider } from 'react-native-popup-menu';
import { NotificationServices, requestUserPermission } from './src/utils/pushNotificationHandler';
import { LoadingProvider } from './src/utils/loadingContext';


const index = () => {
  useEffect(() => {
    NotificationServices();
    requestUserPermission();
  }, []);

  return (
    <MenuProvider>
      <Provider store={store}>
        <LoadingProvider>
          <AppContextProvider>
            <Navigation />
          </AppContextProvider>
        </LoadingProvider>
      </Provider>
    </MenuProvider>
  );
};

export default index;








