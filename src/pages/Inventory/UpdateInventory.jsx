import { Formik } from "formik"
import { ActivityIndicator, ScrollView, StyleSheet, View } from "react-native"
import { useMutation, useQuery, useQueryClient } from "react-query"
import Button from "../../components/atoms/Button"
import InputForm from "../../components/atoms/Form/InputForm"
import Header from "../../components/molecules/Header"
import useInventoryAPI from "../../utils/api/Inventory"
import Select from "../../components/atoms/Form/SelectDropdown"
import useSupplierAPI from "../../utils/api/supplier"
import * as Yup from "yup"
import { useToast } from "react-native-toast-notifications"


const EditInventory = ({ route, navigation }) => {
    const { id } = route.params

    const queryClient = useQueryClient();
    const { updateInventoryAPI, detailInventoryAPI } = useInventoryAPI()
    const { getALLSupplierAPI } = useSupplierAPI()
    const toast = useToast();

    const { data: itemInventory } = useQuery('editInventory', () => detailInventoryAPI(id))
    const { data: getSupplier } = useQuery('getAllSuplier', getALLSupplierAPI);
    const dataSelectSupplier = getSupplier?.data.map(item => ({ key: item.id.toString(), value: item.name }));
 
    const updateInventoryQuery = useMutation({
        mutationFn: (valueData) => {
            return updateInventoryAPI(valueData)
        },
        onSuccess: (data) => {
            queryClient.invalidateQueries('detailInventoryItem')
            queryClient.invalidateQueries('getListInventory')
            queryClient.invalidateQueries('getInventoryHome')
            navigation.goBack()
        },
        onError: (err) => {
            toast.show("Update is failed")
        }
    })
    const DataInventory = {
        id: itemInventory?.id,
        sku: itemInventory?.sku || '',
        name: itemInventory?.name || '',
        costPrice: itemInventory?.costPrice.toString() || '',
        retailPrice: itemInventory?.retailPrice.toString() || '',
        qty: itemInventory?.qty.toString() || 0,
        marginPercentage: itemInventory?.marginPercentage.toString() || '',
        supplierId: itemInventory?.supplier?.id ?? 0
    }
    const defaultOptionSupplier = {
        key: itemInventory?.supplier?.id.toString() || '' ,
        value: itemInventory?.supplier?.name || '',
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
    const onSubmit = (values) => {
        const data = {
            ...values,
            isDeleted: true,
            costPrice: Number(values.costPrice),
            retailPrice: Number(values.retailPrice),
            qty: Number(values.qty),
            marginPercentage: Number(values.marginPercentage)
        }
        updateInventoryQuery.mutate(data)
    }

    return (
        <View>
            <Header title={"Update Item"} desc={"Change your item inventory"} />
            {itemInventory ? (
                <ScrollView>
                    <Formik
                        enableReinitialize={true}
                        initialValues={DataInventory}
                        validationSchema={supplierSchema}
                        onSubmit={(value) => onSubmit(value)}
                    >
                        {({ handleChange, handleBlur, handleSubmit, values, errors }) => {
                            return (
                                (
                                    <ScrollView style={styles.container}>
                                        <View>
                                            <Select
                                                label={"Name Supplier"}
                                                onChangeText={handleChange('supplierId')}
                                                data={dataSelectSupplier}
                                                value={values.supplierId}
                                                error={errors.supplierId}
                                                defaultOption={defaultOptionSupplier}
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

                                            <Button title={"Update Inventory"}
                                                style={styles.buttonStyle}
                                                disabled={updateInventoryQuery.isLoading}
                                                onPress={handleSubmit} />
                                        </View>
                                    </ScrollView>
                                )
                            )
                        }
                        }

                    </Formik>
                </ScrollView>
            ) : (
                <ActivityIndicator />
            )}
        </View>
    )
}
export default EditInventory
const styles = StyleSheet.create({
    buttonStyle: {
        marginTop: 12
    },
    container: {
        padding: 8,
        gap: 4,
    },
})