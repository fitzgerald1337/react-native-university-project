import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'


const Badge = ({ userInfo }) => {
    const { avatar_url, name, login } = userInfo
    return (
        <View style={styles.badge_container}>
            <Image
                style={styles.badge_image}
                source={{ uri: avatar_url }}
            />
            <Text style={styles.badge_name}> {name} </Text>
            <Text style={styles.badge_handle}> {login} </Text>
        </View>
        
    )
};

const styles = StyleSheet.create({
    badge_container: {
        backgroundColor: '#48BBEC',
        paddingBottom: 10
    },
    badge_name: {
        alignSelf: 'center',
        fontSize: 21,
        marginTop: 10,
        marginBottom: 5,
        color: 'white'
    },
    badge_handle: {
        alignSelf: 'center',
        fontSize: 16,
        color: 'white'
    },
    badge_image: {
        height: 125,
        width: 125,
        borderRadius: 65,
        marginTop: 10,
        alignSelf: 'center'
    },
});
export default Badge