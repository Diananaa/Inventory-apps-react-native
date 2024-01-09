import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { ICNote } from "../../../../assets/icons"
import Row from "../../Row"
import React from "react"
import { IRealmsCardProps } from "./RealmsCard.type"

const RealmsCard: React.FC<IRealmsCardProps> = ({ onPress }) => {
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
            <Row style={style.containerStyle}>
                <ICNote />
                <View>
                    <Text style={[style.titleStyle, style.colorText]}>
                        Effortless Inventory Mastery:
                    </Text>
                    <Text style={[style.descStyle, style.colorText]}>
                        Turning Tasks into Triumphs
                    </Text>
                    <Text style={[style.descStyle, style.colorText]}>
                        for Seamless Stock Control!
                    </Text>
                </View>
            </Row>
        </TouchableOpacity>
    )
}
export default RealmsCard

const style = StyleSheet.create({
    containerStyle: {
        marginVertical: 4,
        marginHorizontal: 10,
        padding: 8,
        paddingRight: 10,
        backgroundColor: '#C1544A',
        borderRadius: 8,
        marginBottom: 20,
    },
    colorText: {
        color: 'white'
    },
    titleStyle: {
        fontSize: 19
    },
    descStyle: {
        fontSize: 16
    }
})