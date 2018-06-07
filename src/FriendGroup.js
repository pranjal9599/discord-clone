import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    Dimensions
} from 'react-native';

import UserImg from './walll.jpg';

const { width, height } = Dimensions.get("window");

const FriendGroup = ({ user, playing, status }) => (
    <TouchableOpacity style={ styles.tabContainer } >
        <View style={{ padding: 10 }}>
            <Image 
                source={ UserImg }
                style={styles.img} 
            />
            <View style={ [ styles.status ,styles[status]] } />
        </View>
        <View style={{ padding: 10 }}>
            <Text style={ styles.username }>
                {user}
            </Text>
            <Text style={ styles.playing }>
                Playing {playing}
            </Text>
        </View>
        <View style={{ alignSelf: 'center', flexDirection: 'row', marginLeft: 'auto'}}>

            <Image 
                source={ UserImg }
                style={styles.commonServer} 
            />

            <Image 
                source={ UserImg }
                style={styles.commonServer} 
            />
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    tabContainer: {
        width: width,
        flexDirection: 'row',
        padding: 5,
        // justifyContent: 'space-around'
    },
    img: {
        height: 40,
        width: 40,
        borderRadius: 20
    },
    commonServer: {
        height: 20,
        width: 20,
        borderRadius: 10,
        margin: 5
    },
    status: {
        position: 'absolute',
        bottom: 10,
        right: 10,
        width: 10,
        height: 10,
        backgroundColor: "green",
        borderRadius: 5
    },
    online: {
        backgroundColor: "rgba(0,255,0,0.7)"
    },
    busy: {
        backgroundColor: "rgba(255,0,0,0.7)"
    },
    offline: {
        backgroundColor: "rgba(255,255,255,0.5)"   
    },
    away: {
        backgroundColor: "yellow"
    },
    username: {
        color: "rgba(255,255,255,0.7)",
        fontSize: 14
    },
    playing: {
        color: "rgba(255,255,255,0.4)",
        fontSize: 10
    }
});

export default FriendGroup;