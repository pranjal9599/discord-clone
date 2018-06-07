import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView,
    Dimensions,
    StatusBar,
    TextInput
} from 'react-native';

import Icon from 'react-native-vector-icons/Entypo';

import userImg from "./walll.jpg";

const { width, height } = Dimensions.get("window");


const ChatItem = ({ username, msg }) => (
    <View style={{ flexDirection: 'row', marginTop: 5, marginBottom: 5 }}>
        <View style={ styles.imgBox }>
            <Image 
                source={ userImg }
                style={ styles.userImg }
            />
        </View>

        <View style={{ flexDirection: 'column', paddingLeft: 20 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={ [styles.username, styles.text] }>
                    {username}
                </Text>
                <Text style={styles.meta}>
                    Today at 5:05 PM
                </Text>
            </View>
            <Text style={ [styles.messageContent ] }>
                {msg}
            </Text>
        </View>
    </View>
)

const Chat = () => (
    <View style={{ flex: 1}}>
        <ScrollView style={styles.chatScroll}>
            <ChatItem username="ZUCC" msg="HAHAHAHHAHAHH!!" />
            <ChatItem username="lol" msg="lul wut!!" />
            <ChatItem username="kkk" msg="im wet" />
            <ChatItem username="kkk" msg="im wet" />
            <ChatItem username="kkk" msg="im wet" />
            <ChatItem username="kkk" msg="im wet" />
            <ChatItem username="kkk" msg="im wet" />
            <ChatItem username="kkk" msg="im wet" />
            <ChatItem username="kkk" msg="im wet" />
            <ChatItem username="kkk" msg="im wet" />
            <ChatItem username="kkk" msg="im wet" />
            <ChatItem username="kkk" msg="im wet" />
            <ChatItem username="kkk" msg="im wet" />
        </ScrollView>
        <View style={styles.sendMsg}>
            <View style={{ flex: 1}}>
                <Icon name="attachment" size={15} color="#fff" style={styles.icon} />
            </View>
            <View style={{ flex: 7 }}>
                <Text style={ styles.send }>Message #loli</Text>
            </View>
            <View style={{ flex: 2, flexDirection: "row", justifyContent: "flex-end"}}>
                <Icon name="emoji-happy" size={15} color="#fff" style={styles.icon} />
                <Icon name="paper-plane" size={15} color="#fff" style={styles.icon}/>
            </View>
        </View>
    </View>
);


const styles = StyleSheet.create({
    chatScroll: {
        width: width,
        paddingTop: 60 + StatusBar.currentHeight,
        padding: 20,
        flex: 1,
    },
    text: {
        color: "#fff"
    },
    userImg: {
        height: 40,
        width: 40,
        borderRadius: 40/2
    },
    imgBox: {

    },
    meta: {
        color: "rgba(255,255,255,0.2)",
        marginLeft: 10,
        fontSize: 10
    },
    messageContent: {
        color: "rgba(255,255,255,0.7)",
        fontSize: 13
    },
    sendMsg: {
        position: "absolute",
        bottom: 0,
        width: width,
        padding: 10,
        backgroundColor: "#111",
        flexDirection: "row",
        justifyContent: "center",
    },
    send: {
        color: "rgba(255,255,255,0.6)",
        fontSize: 10
    },
    icon: {
        marginLeft: 5,
        marginRight: 5,
        color: "rgba(255,255,255,0.4)"
    }
})

export default Chat;