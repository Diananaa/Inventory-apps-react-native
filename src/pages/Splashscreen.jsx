import { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { getLocalStorage } from '../utils/storage'

const SplashScreen = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            getLocalStorage('auth').then((data) => {
                if (data === undefined || data === null) {
                    navigation.replace('Login')
                } else {
                    navigation.replace('CreateSupplier')
                }
            })
        }, 2000)
    }, [navigation])
    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>INVETORY APPS</Text>
        </View>
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    textStyle: {
        color: 'rgb(153 27 27)',
        fontSize: 32,
        fontWeight: 'bold'
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})