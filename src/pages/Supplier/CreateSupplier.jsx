import { useMutation } from 'react-query'
import { Formik } from 'formik'
import { ScrollView, StyleSheet, View } from 'react-native'
import { useToast } from 'react-native-toast-notifications'
import { useSelector } from 'react-redux'
import * as Yup from "yup"
import Button from '../../components/atoms/Button'
import InputForm from '../../components/atoms/Form/InputForm'
import Header from '../../components/molecules/Header'
import useSupplierAPI from '../../utils/api/supplier'

const CreateSupplier = ({ navigation }) => {
    const toast = useToast();
    const { createSupplierAPI } = useSupplierAPI()

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
    const createQuery = useMutation({
        mutationFn: (valueData) => {
            return createSupplierAPI(valueData)
        },
        onSuccess: (data) => {
            console.log('data data', data)
            navigation.replace('ListSupplier')
        },
        onError: (err) => {
            toast.show("Create supplier is failed")
        }
    })

    return (
        <View >
            <Header title={"Supplier"}
                type={"primary"}
            />

            <Formik
                initialValues={initialValues}
                validationSchema={supplierSchema}
                onSubmit={datas => {
                    const data = {
                        name: datas.name,
                        address: datas.address,
                        city: datas.city,
                        postCode: datas.postCode,
                        contacts: [
                            {
                                name: datas.nameEmail ?? '-',
                                contactType: "email",
                                value: datas.valueEmail ?? '-'
                            }, {
                                name: datas.namePhoneMobile ?? '-',
                                contactType: "mobilePhone",
                                value: datas.valuePhoneMobile ?? '-'
                            }, {
                                name: datas.namePhoneOffice ?? '-',
                                contactType: "officePhone",
                                value: datas.valuePhoneOffice ?? '-'
                            }
                        ]
                    }
                    createQuery.mutate(data)
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
                                numberOfLines={4}
                                multiline = {true}
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
                                placeholder={'081234567'}
                            />

                            <InputForm
                                onChangeText={handleChange('namePhoneOffice')}
                                onBlur={handleBlur('namePhoneOffice')}
                                value={values.namePhoneOffice}
                                error={errors.namePhoneOffice}
                                label={'Phone Number Office'}
                                placeholder={'Name'}
                            />

                            <InputForm
                                onChangeText={handleChange('valuePhoneOffice')}
                                onBlur={handleBlur('valuePhoneOffice')}
                                value={values.valuePhoneOffice}
                                error={errors.valuePhoneOffice}
                                keyboardType="numeric"
                                placeholder={'1234567891011'}
                            />
                            <Button title={"Create Suplier"}
                                style={styles.buttonStyle}
                                disabled={createQuery.isLoading}
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
    },
    buttonStyle: {
        marginTop: 30, marginBottom: 100
    }
})