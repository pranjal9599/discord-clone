import React from 'react';
import {
    View,
    Image,
    Text,
    StyleSheet,
    StatusBar
} from 'react-native';

import { createStackNavigator } from 'react-navigation';

import Header from './Header';
import Tabs from './Tabs';

// const MainView = () => (
//     // <View>
//     //     <StatusBar 
//     //         translucent={true} 
//     //         backgroundColor="rgba(0,0,0,0.4)"
//     //         barStyle="light-content"
//     //     />
//     //     {/* <Header title="Friends"/> */}
//     //     <Tabs />
//     // </View>
//     <Tabs>
//         <Header title="Friends" />
//     </Tabs>
// );

// export default MainView;



export default createStackNavigator({
    MyTab: {
        screen: Tabs,
        navigationOptions: {header : Header}
    }
});
