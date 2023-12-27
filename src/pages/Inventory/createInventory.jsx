import { Formik } from 'formik'
import { ScrollView, StyleSheet, View } from 'react-native'
import { useToast } from 'react-native-toast-notifications'
import { useMutation, useQuery } from 'react-query'
import * as Yup from "yup"
import Button from '../../components/atoms/Button'
import InputForm from '../../components/atoms/Form/InputForm'
import Header from '../../components/molecules/Header'
import useSupplierAPI from '../../utils/api/supplier'
import Select from '../../components/atoms/Form/SelectDropdown'

const CreateInventory = ({ navigation }) => {
    const toast = useToast();
    const { createSupplierAPI, getALLSupplierAPI } = useSupplierAPI()

    const initialValues = {
        sku: '',
        name: '',
        costPrice: 0,
        retailPrice: 0,
        qty: 0,
        marginPercentage: 0,
        supplierId: ''
    }

    const supplierSchema = Yup.object().shape({
        sku: Yup.string().required('SKU is required'),
        name: Yup.string().required('Name is required'),
        costPrice: Yup.number().required('Cost price is required'),
        retailPrice: Yup.number().required('Retail price is required'),
        qty: Yup.number().required('Quantity price is required'),
        marginPercentage: Yup.number().required('Margin percentage price is required'),
        supplierId: Yup.string().required('Supplier is required'),
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
  
    const { data, isLoading, error } = useQuery('getAllSuplier', getALLSupplierAPI);
    const dataSelectSupplier = data?.data.map(item => ({ key: item.id.toString(), value: item.name }));

    return (
        <View >
            <Header
                title={"Create Inventory"}
            // desc={`${data.name} || ${data.sku}`}
            />
            <Formik
                initialValues={initialValues}
                validationSchema={supplierSchema}
                onSubmit={datas => {
                    // const data = {
                    //     supplierId: data,
                    //     ...data
                    // }
                    console.log('value', data)
                    console.log('datas value', datas)
                }}
            >
                {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
                    <ScrollView style={styles.container}>
                        <View>
                            <Select
                                label={"Name Supplier"}
                                onChangeText={handleChange('supplierId')}
                                data={dataSelectSupplier}
                                value={values.supplierId}
                                error={errors.supplierId}
                            />
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
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
    inputContainer: {
        backgroundColor: 'rgb(203 213 225)',
        borderColor: 'gray',
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 8,
        paddingHorizontal: 25,
        fontSize: 16,
        height: 60,
    },
    selectInput: {
        backgroundColor: 'orange',
        width: '100%',
        fontSize: 16,
    },
    descInputstyle: {
        fontSize: 16, backgroundColor: "white",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        paddingVertical: 8, paddingHorizontal: 12,
    }
})