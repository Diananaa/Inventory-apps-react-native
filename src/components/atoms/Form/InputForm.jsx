import { TextInput, StyleSheet, View, Text, } from 'react-native';
import { ICkeyLogo, ICuserLogo } from '../../../assets/icons';
const InputForm = ({ onChangeText, onBlur, value, label, placeholder, type, error, ...props }) => {
    if (type) {
        return (
            <View style={{ height: 100 }}>
                {label ? <Text style={styles.labelStyle}>{label}</Text> : null}
                <View style={styles.containerType}>
                    <View style={styles.iconStyle}>
                        {
                            type === 'username' ? (
                                <ICuserLogo width={18} height={18} fill={"rgb(220 38 38)"} />
                            ) : type === "password" ? (
                                <ICkeyLogo width={18} height={18} fill={"rgb(220 38 38)"} />
                            ) : (
                                null
                            )
                        }
                    </View>
                    <TextInput
                        onChangeText={onChangeText}
                        onBlur={onBlur}
                        value={value}
                        placeholder={placeholder}
                        style={styles.inputType}
                        {...props}
                        secureTextEntry={type === "password" ? true : false}
                    />
                </View>
                {
                    error ? (
                        <Text style={styles.errorStyle}>{error}</Text>
                    ) : null
                }
            </View>
        )
    }
    return (
        <View style={styles.container}>
            {label ? <Text style={styles.labelStyle}>{label}</Text> : null}
            <TextInput
                onChangeText={onChangeText}
                onBlur={onBlur}
                value={value}
                placeholder={placeholder}
                style={styles.input}
                {...props}
            />
            {
                error ? (
                    <Text style={styles.errorStyle}>{error}</Text>
                ) : null
            }
        </View>
    )

}
const styles = StyleSheet.create({
    container: {
        marginVertical: 4
    },
    containerType: {
        flexDirection: "row",
        backgroundColor: 'rgb(203 213 225)',
        borderColor: 'gray',
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        // borderWidth: 1,
        // borderColor: 'gray',
        // fontSize: 14,
        // paddingVertical: 4,
        // paddingHorizontal: 12,
        // borderRadius: 12,
        // marginTop: 4

        backgroundColor: 'rgb(203 213 225)',
        borderColor: 'gray',
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 8,
        paddingHorizontal: 12,
        fontSize: 16,

    },
    inputType: {
        fontSize: 16,
        paddingVertical: 8,
        paddingHorizontal: 12,
        width: 100,
        flex: 1,
    },
    labelStyle: {
        marginBottom: 4,
        fontSize: 18,
        fontWeight: '500'
    },
    iconStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRightWidth: 1,
        borderRightColor: 'rgb(220 38 38)',
        paddingHorizontal: 8,
        height: 20
    },
    errorStyle: {
        color: 'rgb(225 29 72)'
    }
})

export default InputForm
