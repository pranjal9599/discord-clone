import React from 'react';
import {
    View, 
    Text,
    Image,
    StyleSheet,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import { NavigationActions } from 'react-navigation';

import img from './walll.jpg';



class SideMenu extends React.Component {
    navigateToScreen(route) {
        NavigationActions.navigate({
            routeName: route
        });
    }

    render() {
        return (
            <View style={styles.sidebar}>
                <ScrollView style={styles.Servers} contentContainerStyle={styles.ServersContainer}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Main')}>
                        <Image source={img} style={styles.serverImg} />
                    </TouchableOpacity>
                    <Image source={img} style={styles.serverImg} />
                    <Image source={img} style={styles.serverImg} />
                    <Image source={img} style={styles.serverImg} />
                    <Image source={img} style={styles.serverImg} />
                    <Image source={img} style={styles.serverImg} />
                    <Image source={img} style={styles.serverImg} />
                    <Image source={img} style={styles.serverImg} />
                    <Image source={img} style={styles.serverImg} />
                    <Image source={img} style={styles.serverImg} />
                    <Image source={img} style={styles.serverImg} />
                    <Image source={img} style={styles.serverImg} />
                    <Image source={img} style={styles.serverImg} />
                    <Image source={img} style={styles.serverImg} />
                    <Image source={img} style={styles.serverImg} />
                    <Image source={img} style={styles.serverImg} />
                    <Image source={img} style={styles.serverImg} />
                    <Image source={img} style={styles.serverImg} />
                    <Image source={img} style={styles.serverImg} />
                    <Image source={img} style={styles.serverImg} />
                    <Image source={img} style={styles.serverImg} />
                </ScrollView>
                <ScrollView style={styles.ServerInfo} contentContainerStyle={styles.ServerInfoContainer}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", padding: 10}}>
                        <Text style={[ styles.text, styles.serverName ]}>HAROLD GUY</Text>
                        <Icon name="dots-three-vertical" size={15} color="#fff" />
                    </View>
                    <View style={{ padding: 10 }}>
                        <Text style={[ styles.channelName ]}># general</Text>
                        <Text style={[ styles.channelName ]}># design</Text>
                        <Text style={[ styles.channelName ]}># gaming</Text>
                        <Text style={[ styles.channelName ]}># cs-stuff</Text>
                        <Text style={[ styles.channelName ]}># dank-memes</Text>
                        <Text style={[ styles.channelName ]}># botcommandds</Text>
                        <Text style={[ styles.channelName ]}># help</Text>
                        <Text style={[ styles.channelName ]}># nsfw</Text>
                        <Text style={[ styles.channelName ]}># announcements</Text>
                        <Text style={[ styles.channelName ]}># rules</Text>
                        <Text style={[ styles.channelName, styles.selectedChannel ]}># rules</Text>
                    </View>
                </ScrollView>

                <View style={styles.profileInfo}>
                    <View>
                        <Image source={img} style={styles.profileImg} />
                        <View style={styles.status} />
                    </View>
                    <View style={{ paddingLeft: 20}}>
                        <Text style={[ styles.text, styles.username ]}>Z U C C</Text>
                        <Text style={{ color: "rgba(255,255,255,0.5)", fontSize: 8}}>#6693</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginLeft: 'auto' }}>
                        <Icon name="v-card" size={15} color="rgba(255,255,255,0.5)" style={styles.icon} />
                        <Icon name="email" size={15} color="rgba(255,255,255,0.5)" style={styles.icon}/>
                        <Icon name="cog" size={15} color="rgba(255,255,255,0.5)" style={styles.icon}/>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    sidebar: {
        backgroundColor: '#111',
        flex: 1,
        flexDirection: 'row'
    },
    text: {
        color:  "#fff"
    },
    channelName: {
        color: "rgba(255,255,255,0.5)",
        fontSize: 12,
        padding: 10
    },
    selectedChannel: {
        color: "#fff",
        backgroundColor: "rgba(255,255,255,0.1)",
        padding: 10
    },
    serverName: {
        fontWeight: "700",
        fontSize: 13,
        marginLeft: 10
    },
    Servers: {
        width: "20%",
        backgroundColor: "rgba(0,0,0,0.9)",
    },
    ServersContainer: {
        alignItems: 'center',
        paddingTop: 30
    },
    ServerInfoContainer: {
        paddingTop: 30
    },
    ServerInfo: {
        width: "80%",
        backgroundColor: "rgba(0,0,0,0.5)"
    },
    serverImg: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginTop: 5,
        marginBottom: 5
    },
    profileInfo: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        backgroundColor: "#111",
        padding: 15,
        flexDirection: 'row',
        alignItems: 'center'
    },
    profileImg: {
        width: 30,
        height: 30,
        borderRadius: 15
    },
    status: {
        position: "absolute",
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: "green",
        bottom: 0,
        right: 0
    },
    icon: {
        marginLeft: 5,
        marginRight: 5
    },
    username: {
        color: "rgba(255,255,255,0.7)"
    }
})

export default SideMenu;