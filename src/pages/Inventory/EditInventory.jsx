import { View, Text, ScrollView, StyleSheet } from "react-native"
import Header from "../../components/molecules/Header"
import InputForm from "../../components/atoms/Form/InputForm"
import { Formik } from "formik"
import Button from "../../components/atoms/Button"

const EditInventory = () => {
    const DataInventory = {
        id: '',
        name: ''
        // co
    }

    return (
        <View>
            <Header title={"Edit Data Barang"} desc={"Ubah data Barang"} />
            <ScrollView>
                <Formik
                    initialValues={DataInventory}
                    onSubmit={values => console.log(values)}
                >
                    {({ handleChange, handleBlur, handleSubmit, values }) => (
                        <View style={styles.container}>
                            <InputForm
                                label={"ID Barang"}
                                onChangeText={handleChange('id')}
                                onBlur={handleBlur('id')}
                                value={values.id}
                                placeholder={'Masukkan ID Barang'}
                            />
                            <InputForm
                                label={"Nama Barang"}
                                onChangeText={handleChange('name')}
                                onBlur={handleBlur('name')}
                                value={values.name}
                                placeholder={'Masukkan Nama Barang'}
                            />
                            <View style={styles.buttonStyle}>
                                <Button title={"Simpan Perubahan"} onPress={handleSubmit} />
                            </View>
                        </View>
                    )}

                </Formik>


            </ScrollView>

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