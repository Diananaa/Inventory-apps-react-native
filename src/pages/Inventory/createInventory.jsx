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

const CreateInventory = ({ route, navigation }) => {
    const { data } = route.params;

    console.log('id id id', data)
    const toast = useToast();
    const { createSupplierAPI } = useSupplierAPI()

    const initialValues = {
        sku: '',
        name: '',
        costPrice: 0,
        retailPrice: 0,
        qty: 0,
        marginPercentage: 0,
        supplierId: 0
    }
    const supplierSchema = Yup.object().shape({
        sku: Yup.string().required('SKU is required'),
        name: Yup.string().required('Name is required'),
        costPrice: Yup.number().required('Cost price is required'),
        retailPrice: Yup.number().required('Retail price is required'),
        qty: Yup.number().required('Quantity price is required'),
        marginPercentage: Yup.number().required('Margin percentage price is required'),
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
            <Header
                title={"Create Inventory"}
                desc={`${data.name} || ${data.sku}`}
            />

            <Formik
                initialValues={initialValues}
                validationSchema={supplierSchema}
                onSubmit={datas => {
                    const data = {
                        supplierId: data,
                        ...data
                    }
                    // createQuery.mutate(datas)
                    console.log('value', data)
                    console.log('datas value', datas)
                }}
            >
                {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
                    <ScrollView style={styles.container}>
                        <View>
                            <InputForm
                                onChangeText={handleChange('sku')}
                                onBlur={handleBlur('sku')}
                                value={values.sku}
                                error={errors.sku}
                                label={'SKU'}
                                placeholder={'SKU serial'}
                            />
                            <InputForm
                                onChangeText={handleChange('name')}
                                onBlur={handleBlur('name')}
                                value={values.name}
                                error={errors.name}
                                label={'Name'}
                                placeholder={'Name'}
                            />
                            <InputForm
                                onChangeText={handleChange('costPrice')}
                                onBlur={handleBlur('costPrice')}
                                value={values.costPrice}
                                error={errors.costPrice}
                                label={'Cost Price'}
                                placeholder={'000'}
                                keyboardType="numeric"

                            />
                            <InputForm
                                onChangeText={handleChange('retailPrice')}
                                onBlur={handleBlur('retailPrice')}
                                value={values.retailPrice}
                                error={errors.retailPrice}
                                label={'Retail Price'}
                                placeholder={'000'}
                                keyboardType="numeric"
                            />
                            <InputForm
                                onChangeText={handleChange('qty')}
                                onBlur={handleBlur('qty')}
                                value={values.qty}
                                error={errors.qty}
                                label={'Quantity'}
                                placeholder={'000'}
                                keyboardType="numeric"
                            />
                            <InputForm
                                onChangeText={handleChange('marginPercentage')}
                                onBlur={handleBlur('marginPercentage')}
                                value={values.marginPercentage}
                                error={errors.marginPercentage}
                                label={'Margin Percentage'}
                                placeholder={'00'}
                                keyboardType="numeric"
                            />

                            <Button title={"Create Inventory"}
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
export default CreateInventory

const styles = StyleSheet.create({
    container: {
        padding: 8,
        paddingBottom: 100
    },
    buttonStyle: {
        marginTop: 30, marginBottom: 100
    }
})