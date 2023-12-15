import { Formik } from 'formik'
import { ScrollView, StyleSheet, View } from 'react-native'
import { useSelector } from 'react-redux'
import * as Yup from "yup"
import Button from '../../components/atoms/Button'
import InputForm from '../../components/atoms/Form/InputForm'
import Header from '../../components/molecules/Header'
import useSupplierAPI, { createSupplierAPI } from '../../utils/api/supplier'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'

const CreateSupplier = () => {
    const token = useSelector((state) => state.auth.token)
    const { createSupplierAPI } = useSupplierAPI()
    console.log('token CreateSupplier', token)

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

    const datas = {
        name: "maret",
        address: "jln sudirman jb",
        city: "jakarta",
        postCode: "12345",
        contacts: [
            {
                name: "mac 456",
                contactType: "mobilePhone",
                value: "0898765432"
            }, {
                name: "mac 1",
                contactType: "officePhone",
                value: "12345463"
            }
        ]
    }
    const createQuery = useMutation({
        mutationFn: (valueData) => {
            console.log('valueData', valueData)
            return createSupplierAPI(valueData, token)
            // return createSupplierAPI(valueData, token)
        },
        onSuccess: (data) => {
            console.log('onSuccess createQuery', data)
        },
        onError: (err) => {
            console.log('onError createQuery', err)
        }
    })

    // const createSupplieerrr = async (data, token) => {
    //     return axios.post('https://mobile.dev.quadrant-si.id/developertest/Supplier',
    //         data,
    //         {
    //             headers: {
    //                 Authorization: `Bearer ${token}`
    //             }
    //         }

    //     )
    //         .then((res) => console.log('res.data', res.data)).catch((err) => console.log(err))
    // }

    return (
        <View >
            <Header title={"Supplier"}
                type={"primary"}
            />

            <Formik
                initialValues={initialValues}
                // validationSchema={supplierSchema}
                onSubmit={values => {
                    console.log('v', datas)
                    // createSupplieerrr(datas, token)
                    // createSupplierAPI(datas, token)
                    createQuery.mutate(datas)
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