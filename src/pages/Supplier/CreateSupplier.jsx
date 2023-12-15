import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Header from '../../components/molecules/Header'
import InputForm from '../../components/atoms/Form/InputForm'
import { Formik } from 'formik'
import * as Yup from "yup"
import Button from '../../components/atoms/Button'
import { GetSupllierAPI } from '../../utils/api/supplier'
import { getLocalStorage } from '../../utils/storage'
// import { useSelector } from 'react-redux';

const CreateSupplier = () => {
    const initialValues = {
        name: '',
        address: '',
        city: '',
        postCode: '',
        nameEmail: '',
        valueEmail: '',
        namePhoneMobile: '',
        valuePhoneMobile: '',
        namePhoneOffice: '',
        valuePhoneOffice: '',
    }
    const supplierSchema = Yup.object().shape({
        name: Yup.string().required('Nama is required'),
        address: Yup.string().required('Address is required'),
        city: Yup.string().required('City is required'),
        postCode: Yup.number().required('Post code is required'),
        nameEmail: Yup.string(),
        valueEmail: Yup.string().email(),
        namePhoneMobile: Yup.string(),
        valuePhoneMobile: Yup.number(),
        namePhoneOffice: Yup.string(),
        valuePhoneOffice: Yup.number(),
    })

    // const balance = useSelector((state) => state.balance.value);
    // console.log('balance', balance)
    return (
        <View >
            <Header title={"Supplier"}
                type={"primary"}
            />
            <Formik
                initialValues={initialValues}
                validationSchema={supplierSchema}
                onSubmit={values => {
                    console.log('v', values)

                }}
            >
                {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
                    <ScrollView style={styles.container}>
                        <View>
                            <InputForm
                                onChangeText={handleChange('name')}
                                onBlur={handleBlur('name')}
                                value={values.name}
                                error={errors.name}
                                label={'Name'}
                                placeholder={'Name supplier'}
                            />
                            <InputForm
                                onChangeText={handleChange('address')}
                                onBlur={handleBlur('address')}
                                value={values.address}
                                error={errors.address}
                                label={'Address'}
                                placeholder={'Address supplier'}
                            />
                            <InputForm
                                onChangeText={handleChange('city')}
                                onBlur={handleBlur('city')}
                                value={values.city}
                                error={errors.city}
                                label={'City'}
                                placeholder={'City supplier'}
                            />
                            <InputForm
                                onChangeText={handleChange('postCode')}
                                onBlur={handleBlur('postCode')}
                                value={values.postCode}
                                error={errors.postCode}
                                label={'Post Code supplier'}
                                placeholder={'1234'}
                                keyboardType="numeric"
                            />

                            <InputForm
                                onChangeText={handleChange('nameEmail')}
                                onBlur={handleBlur('nameEmail')}
                                value={values.nameEmail}
                                error={errors.nameEmail}
                                label={'Email'}
                                placeholder={'Name'}
                            />
                            <InputForm
                                onChangeText={handleChange('valueEmail')}
                                onBlur={handleBlur('valueEmail')}
                                value={values.valueEmail}
                                error={errors.valueEmail}
                                placeholder={'example@google.com'}
                            />

                            <InputForm
                                onChangeText={handleChange('namePhoneMobile')}
                                onBlur={handleBlur('namePhoneMobile')}
                                value={values.namePhoneMobile}
                                error={errors.namePhoneMobile}
                                label={'Phone Number Mobile'}
                                placeholder={'Name'}
                            />
                            <InputForm
                                onChangeText={handleChange('valuePhoneMobile')}
                                onBlur={handleBlur('valuePhoneMobile')}
                                value={values.valuePhoneMobile}
                                error={errors.valuePhoneMobile}
                                keyboardType="numeric"
                                placeholder={'+6281234567'}
                            />

                            <InputForm
                                onChangeText={handleChange('namePhoneOffice')}
                                onBlur={handleBlur('namePhoneOffice')}
                                value={values.namePhoneOffice}
                                error={errors.namePhoneOffice}
                                label={'Phone Number Office'}
                                placeholder={'Name'}
                            />

                            {/* <View> */}
                            <InputForm
                                onChangeText={handleChange('valuePhoneOffice')}
                                onBlur={handleBlur('valuePhoneOffice')}
                                value={values.valuePhoneOffice}
                                error={errors.valuePhoneOffice}
                                keyboardType="numeric"
                                placeholder={'1234567891011'}
                            />
                            <Button title={"Login"}
                                style={styles.buttonStyle}
                                // disabled={loginQuery.isPending}
                                onPress={handleSubmit} />
                        </View>
                    </ScrollView>
                )}
            </Formik>
        </View>
    )
}
export default CreateSupplier

const styles = StyleSheet.create({
    container: {
        padding: 8,
        paddingBottom: 100
        // marginBottom:100
        // paddingBottom: 40
    },
    buttonStyle: {
        marginTop: 30, marginBottom: 100
    }
})