import { Formik } from "formik"
import { ScrollView, StyleSheet, View } from "react-native"

// components
import Button from "../../components/atoms/Button"
import InputForm from "../../components/atoms/Form/InputForm"
import Header from "../../components/molecules/Header"
import * as Yup from "yup";

const Login = () => {
    const initialValues = {
        username: '',
        password: ''
    }
    const loginSchema = Yup.object().shape({
        username: Yup.string().required("Username is required"),
        password: Yup.string().min(3, "Password min 3 character").required("Password is required")
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
                    onSubmit={values => console.log(values)}
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
                                <Button title={"Login"} onPress={handleSubmit} />
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
