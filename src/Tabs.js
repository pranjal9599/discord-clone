import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';
import { createMaterialTopTabNavigator } from 'react-navigation';
import FriendGroup from './FriendGroup';

class All extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <FriendGroup user="Mr.Omniverse" playing="vs code" status="online" navigation={this.props.navigation}/>
                <FriendGroup user="ZUCC" playing="Dota 2" status="busy" navigation={this.props.navigation}/>
                <FriendGroup user="Mac" playing="Spotify" status="away" navigation={this.props.navigation}/>
            </View>
        )
    }
}


class Online extends React.Component {
    render() {
        return (
        <View style={styles.container}>
        </View>
        )
    }
}


class Friends extends React.Component {
    render() {
        return (
        <View style={styles.container}>
            <Text>Friends</Text>
        </View>
        )
    }
}


class Pending extends React.Component {
    render() {
        return (
        <View style={styles.container}>
            <Text>Pending</Text>
        </View>
        )
    }
}


class Suggestions extends React.Component {
    render() {
        return (
        <View style={styles.container}>
            <Text>Suggestions</Text>
        </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#111'
    }
});

export default createMaterialTopTabNavigator({
    Online: Online,
    All: All,
    Friends: Friends,
    Pending: Pending,
    Suggestions: Suggestions
},
{
    tabBarOptions: {
        scrollEnabled: true,
        indicatorStyle: {
            backgroundColor: '#fff'
        },
        labelStyle: {
            fontSize: 9,
            color: '#fff'
        },
        tabStyle: {
        },
        style: {
            backgroundColor: '#111',
        }
    }
}
);