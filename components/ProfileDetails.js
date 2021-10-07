import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Separator from 'components/Separator'
import Badge from 'components/Badge'

const ProfileDetails = ({ route: { params } }) => {

    const { gitHubResponse } = params
    const detailsArr = ['company', 'location', 'followers', 'following', 'bio']
    const [state, setState] = useState({
        ...gitHubResponse,
        detailsArray: detailsArr
    })

    const { avatar_url, name, login } = state.gitHubResponse

    const details = state.detailsArray.map((item, index) => {
        return (
            <View style={styles.rowContainer} key={index}>
                <Text style={styles.rowTitle}>{item.toUpperCase()}</Text>
                <Text style={styles.rowContent}>
                    {state.gitHubResponse[item] ? state.gitHubResponse[item]: '---'}
                </Text>
                <Separator />
            </View >
        )
    })

    return (
        <View style={styles.container}>
            <Badge userInfo={{ avatar_url, name, login }} />
            {details}
        </View >
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    rowContainer: {
        padding: 10
    },
    rowTitle: {
        color: '#48BBEC',
        fontSize: 16
    },
    rowContent: {
        fontSize: 19
    }
});
export default ProfileDetails