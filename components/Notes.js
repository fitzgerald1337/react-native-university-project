import React, { useState, useEffect } from 'react'
import {
    StyleSheet, View, Text, KeyboardAvoidingView,
    TextInput, TouchableOpacity
} from 'react-native'
import Badge from 'components/Badge'
import Separator from 'components/Separator'
import { ScrollView } from 'react-native-gesture-handler'



function Notes({ route: { params } }) {

    const { gitHubResponse } = params
    const [state, setState] = useState({
        ...gitHubResponse,
        notes: [],
        note: ''
    })
    const { avatar_url, name, login } = state.gitHubResponse

    const handleText = (text) => {
        setState(prevState => ({
            ...prevState,
            note: text
        }))
    }
    
    const addNoteToList = () => {
        setState(prevState => ({
            ...prevState,
            notes: prevState.notes.concat(prevState.note),
            note: ''
        }))

    }

    const listOfNotes = state.notes.map((note, index) => {
        return (
            <View key={index} style={styles.rowContainer}>
                <Text>{note}</Text>
                <Separator />
            </View>
        )
    })

    return (
        <KeyboardAvoidingView style={styles.container}>
            <Badge userInfo={{ avatar_url, name, login }} />
            <ScrollView>
                {listOfNotes}
            </ScrollView>
            <View style={styles.footerContainer}>
                <TextInput
                    style={styles.noteInput}
                    autoCompleteType={'off'}
                    autoCorrect={false}
                    value={state.note}
                    onChangeText={handleText}
                    placeholder={'New Note'}
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={addNoteToList}
                >
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    buttonText: {
        fontSize: 18,
        color: 'white'
    },
    button: {
        height: 60,
        backgroundColor: '#48BBEC',
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center'
    },
    noteInput: {
        height: 60,
        padding: 10,
        fontSize: 18,
        color: '#111',
        flex: 10
    },
    rowContainer: {
        padding: 10
    },
    footerContainer: {
        backgroundColor: '#E3E3E3',
        alignItems: 'center',
        flexDirection: 'row'
    }
});

export default Notes