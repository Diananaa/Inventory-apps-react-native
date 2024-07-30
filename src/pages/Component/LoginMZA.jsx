import { Formik } from "formik"
import * as Yup from "yup"


import { View } from "react-native"
import CButton from "../../components/atoms/Button/CButton"
import CTextInput from "./Form/CTextInput"

const LoginMZA = () => {
    const initialValues = {
        username: '',
        password: ''
    }
    const loginSchema = Yup.object().shape({
        username: Yup.string().required("Username is required"),
        
        password: Yup.string().min(3, "Password min 3 character").required("Password is required")
    })
    return (
        <View style={{ width: '100%' }}>
            <Formik
                initialValues={initialValues}
                validationSchema={loginSchema}
                onSubmit={value => console.log(value)}
                >
                {({ handleChange, handleSubmit, values, errors }) => (
                    <>
                        <CTextInput
                            onChangeText={handleChange('username')}
                            value={values.username}
                            error={errors.username}
                            placeholder={'Your username'}

                        />
                        <CTextInput
                            onChangeText={handleChange('password')}
                            value={values.password}
                            error={errors.password}
                            placeholder={'Your password'}

                        />
                        <CButton
                            title={'Submit form'}
                            onPress={handleSubmit}
                            type={'primary'}
                        />
                    </>
                )}
            </Formik>
        </View>
    )

}

export default LoginMZA
