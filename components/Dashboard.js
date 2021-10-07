import React, { useState } from 'react'
import {
    StyleSheet, Text, View, Image, TouchableOpacity
} from 'react-native'

const Dashboard = ({ navigation: { navigate, setOptions }, route: { params } }) => {
    
    const { gitHubResponse } = params
    const [state, setState] = useState({ gitHubResponse })
    const { name, avatar_url } = state.gitHubResponse

    setOptions({
        title: name
    })

    return (
        <View style={styles.container}>
            <View style={styles.profilePicBox}>
                <Image
                    style={styles.image}
                    source={{ uri: avatar_url }}
                />
            </View>
            <TouchableOpacity
                style={[styles.blue, styles.box]}
                onPress={() => { navigate('STACK_PROFILE', { gitHubResponse: state }) }}>
                <Text style={styles.buttonText}>Profile Details</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.pink, styles.box]}
                onPress={() => { navigate('STACK_REPOS', { gitHubResponse: state }) }}>
                <Text style={styles.buttonText}>Repositories</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.purple, styles.box]}
                onPress={() => { navigate('STACK_NOTES', { gitHubResponse: state }) }}>
                <Text style={styles.buttonText}>Notes</Text>
            </TouchableOpacity>
        </View>
    )

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ccc',
        padding: 0,
    },
    profilePicBox: {
        flex: 2,
    },
    image: {
        height: 350
    },
    box: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 26,
    },
    blue: {
        backgroundColor: 'powderblue',
    },
    purple: {
        backgroundColor: 'violet'
    },
    pink: {
        backgroundColor: 'pink'
    }
});
export default Dashboard