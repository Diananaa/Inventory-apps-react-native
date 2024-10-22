import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, } from 'react-native';
import { ICEye, ICEyeRed, ICkeyLogo, ICuserLogo } from '../../../assets/icons';

const InputForm = ({ onChangeText, onBlur, value, label, placeholder, type, error, ...props }) => {
    const [showPassword, setShowPassword] = useState(false)
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
                        secureTextEntry={type === "password" && !showPassword}
                    />
                    {
                        type === "password" && (
                            <View style={styles.containerInputPassword}>
                                {
                                    showPassword ? (
                                        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                                            <ICEyeRed />
                                        </TouchableOpacity>
                                    ) : (
                                        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                                            <ICEye />
                                        </TouchableOpacity>
                                    )
                                }
                            </View>
                        )
                    }
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
            // if use number type value must is string
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
    },
    containerInputPassword: {
        paddingRight: 10
    }

})

export default InputForm
