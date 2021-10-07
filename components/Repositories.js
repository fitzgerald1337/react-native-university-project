import React, { useState, useEffect } from 'react'
import {
    Text, StyleSheet, View, ActivityIndicator
} from 'react-native'
import axios from 'axios'
import Separator from 'components/Separator'
import Badge from 'components/Badge'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'

function Repositories({ navigation: { navigate }, route: { params } }) {

    const { gitHubResponse } = params
    const [state, setState] = useState({
        ...gitHubResponse,
        list: [],
        loading: true,
        error: false
    })

    const { avatar_url, name, login } = state.gitHubResponse

    useEffect(() => {
        axios.get(`https://api.github.com/users/${login}/repos`)
            .then((res) => {
                setState(prevState => ({
                    ...prevState,
                    list: res.data,
                    loading: false,
                    error: false
                }))
            })
            .catch((err) => {
                setState(prevState => ({
                    ...prevState,
                    loading: false,
                    error: true
                }))
                console.log(err)
            })
    }, [])

    const listOfRepos = state.list.map((item) => {
        return (
            <TouchableOpacity
                key={item.id}
                style={styles.rowContainer}
                onPress={() => navigate('STACK_WEBVIEW', { url: item.html_url })}
            >
                <Text style={styles.name}>
                    {item.name}
                </Text>
                <Text style={styles.description}>
                    {item.description ? item.description : 'No description.'}
                </Text>
                <Separator />
            </TouchableOpacity>
        )
    })

    return (
        < View style={styles.container} >
            <Badge userInfo={{ avatar_url, name, login }} />
            {state.loading && <ActivityIndicator size='large' color='#48BBEC' />}
            {state.error && <Text style={styles.error}>
                Something went wrong. Please try again.</Text>}
            <ScrollView>
                {listOfRepos}
            </ScrollView>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    rowContainer: {
        flexDirection: 'column',
        flex: 1,
        padding: 10
    },
    name: {
        color: '#48BBEC',
        fontSize: 18,
        paddingBottom: 5
    },
    description: {
        fontSize: 14,
        paddingBottom: 5
    },
    error: {
        fontSize: 20,
        textAlign: 'center',
        color: 'black'
    }
})

export default Repositories