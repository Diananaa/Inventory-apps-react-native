import AsyncStorage from '@react-native-async-storage/async-storage'
import { useMutation, useQuery } from "react-query"
import axios from "axios"
import { Formik } from "formik"
import { ScrollView, StyleSheet, View } from "react-native"
import { useToast } from "react-native-toast-notifications"
import * as Yup from "yup"
import { setLocalStorage } from '../../utils/storage'

// components
import Button from "../../components/atoms/Button"
import InputForm from "../../components/atoms/Form/InputForm"
import Header from "../../components/molecules/Header"
import { loginApi } from "../../utils/api/auth"
import { useDispatch } from 'react-redux'
import { setToken } from '../../redux/auth'

const Login = ({ navigation }) => {
    const dispatch = useDispatch()

    const toast = useToast();
    const initialValues = {
        username: '',
        password: ''
    }
    const loginSchema = Yup.object().shape({
        username: Yup.string().required("Username is required"),
        password: Yup.string().min(3, "Password min 3 character").required("Password is required")
    })

    const loginQuery = useMutation({
        mutationFn: (valueData) => {
            return loginApi(valueData)
        },
        onSuccess: (data) => {
            setLocalStorage('auth', data)
            dispatch(setToken(data.token))
            navigation.replace('Home')
        },
        onError: (err) => {
            toast.show("Login is failed")
        }
    })
    return (
        <>
            <Header
                title={"Login"}
                desc={"I have a acount login"}
            />

            <ScrollView style={styles.container}>
                <Formik
                    initialValues={initialValues}
                    validationSchema={loginSchema}
                    onSubmit={values => {
                        loginQuery.mutate(values)
                    }}
                >
                    {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
                        <View>
                            <InputForm
                                onChangeText={handleChange('username')}
                                onBlur={handleBlur('username')}
                                value={values.username}
                                error={errors.username}
                                label={'Username'}
                                placeholder={'Your username'}
                                type={"username"}
                            />
                            <InputForm
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                value={values.password}
                                error={errors.password}
                                label={'Password'}
                                placeholder={'Your password'}
                                type={"password"}
                            />
                            <View style={styles.buttonStyle}>
                                <Button title={"Login"} disabled={loginQuery.isLoading} onPress={handleSubmit} />
                            </View>
                        </View>
                    )}
                </Formik>
            </ScrollView>
        </>
    )
}
export default Login

const styles = StyleSheet.create({
    container: {
        padding: 8,
    },
    buttonStyle: {
        marginTop: 50
    }

})
