import React, { useState } from 'react'
import {
    StyleSheet, KeyboardAvoidingView, Text,
    View, TextInput, ActivityIndicator
} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import axios from 'axios'

const Search = ({ navigation: { navigate } }) => {

    const [state, setState] = useState({
        username: '',
        loading: false,
        error: false
    })
    const { username, loading, error } = state
    const handleSubmit = () => {

        setState(prevState => ({
            ...prevState,
            loading: true
        }))

        axios.get(`https://api.github.com/users/${username}`)
            .then((res) => {
                setState(prevState => ({
                    ...prevState,
                    loading: false,
                    error: false
                }))
                navigate('STACK_DASHBOARD', { gitHubResponse: res.data })
            })
            .catch((err) => {
                setState(prevState => ({
                    ...prevState,
                    loading: false,
                    error: true
                }))
                console.log(err)
            })
    }

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={'padding'}
        >
            <Text style={styles.title}>
                Search for a GitHub user
            </Text>
            <TextInput
                style={styles.searchInput}
                value={username}
                placeholder={'GitHub username'}
                onChangeText={(text) => setState(prevState => ({
                    ...prevState,
                    username: text
                }))}

            />
            <TouchableOpacity onPress={handleSubmit}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Search</Text>
                </View>
            </TouchableOpacity>
            {loading && <ActivityIndicator size='large' color='white' />}
            {error && <Text style={styles.error}>Something went wrong. Try again.</Text>}
        </KeyboardAvoidingView>
    )

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#48BBEC',
        justifyContent: 'center',
        padding: 30,
    },
    title: {
        marginBottom: 20,
        fontSize: 25,
        textAlign: 'center',
        color: 'white'
    },
    searchInput: {
        height: 50,
        padding: 5,
        marginRight: 5,
        fontSize: 22,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: 'white',
        color: 'white'
    },
    buttonText: {
        fontSize: 20,
        color: '#111',
        alignSelf: 'center'
    },
    button: {
        height: 50,
        flexDirection: 'row',
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 8,
        borderColor: 'white',
        marginTop: 10,
        marginBottom: 10,
        alignSelf: 'stretch',
        justifyContent: 'center'
    },
    error: {
        fontSize: 20,
        textAlign: 'center',
        color: 'white'
    }
});
export default Search