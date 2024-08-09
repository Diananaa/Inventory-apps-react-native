import { Image, Text, View } from "react-native"
import BackgroundImage from '../../assets/mza/image/background-login-hero.png'
import { ICZurich } from "../../assets/mza/icon"


const LoginScreen = () => {
    return (
        <View style={{ backgroundColor: 'white', flex: 1 }}>
            <ICZurich/>
            <Text></Text>

            <View style={{width:'100%'}}>
                <Image source={BackgroundImage} style={{ height:200, width:1300}}  />
            </View>
        </View>
    )
}
export default LoginScreen