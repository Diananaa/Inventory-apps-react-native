import React from 'react'
import { useModal } from 'react-native-modalfy';
import { Button, Text, View } from 'react-native'

const Message = () => {
  const { openModal } = useModal();
  return (
    <View>
      <Text>Just press send!</Text>
      <Button title="Buka Modal" onPress={() => openModal('MessageSentModal')} />

    </View>
  )
}

export default Message
