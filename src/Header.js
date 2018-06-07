import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    StatusBar
} from 'react-native';

import Icon from 'react-native-vector-icons/Entypo';

const Header = ({ title }) => (
    <View style={styles.header} elevation={10}>
        <StatusBar
            translucent={true}
            backgroundColor="rgba(0,0,0,0.6)"
        />
        <View style={{ flex: 1 }}>
            <Icon name="menu" size={20} color="#fff" />
        </View>
        <View style={{ flex: 3 }}>
            <Text style={[ styles.text ]}>
                {title}
            </Text>
        </View>
        <View style={{ flex: 2, flexDirection: "row" }}>
            <Icon name="magnifying-glass" size={20} color="#fff" style={styles.icon} />
            <Icon name="users" size={20} color="#fff"  style={ styles.icon} />
            <Icon name="dots-three-vertical" size={20} color="#fff" style={styles.icon} />
        </View>
    </View>
);

const styles = StyleSheet.create({
    header: {
        paddingTop: StatusBar.currentHeight + 20,
        padding: 20,
        alignSelf: 'flex-start',
        top: 0,
        width: "100%",
        height: 70,
        alignItems: 'center',
        backgroundColor: "#111",
        flexDirection: "row",

    },
    text: {
        color: '#fff'
    },
    icon: {
        marginLeft: 20
    }
})


export default Header;