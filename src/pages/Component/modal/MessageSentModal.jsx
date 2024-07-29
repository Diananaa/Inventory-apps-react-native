import React from 'react'
import { Button, Text, View } from 'react-native'
import { useModal } from 'react-native-modalfy';


const MessageSentModal = ({ modal }) => {

    const { closeModal } = useModal()

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
            <View style={{ width: 300, padding: 20, backgroundColor: 'white', borderRadius: 10 }}>
                <Text>Ini adalah Custom Modal</Text>
                <Button title="Tutup" onPress={() => closeModal()} />
            </View>
        </View>
    )
}
export default MessageSentModal
