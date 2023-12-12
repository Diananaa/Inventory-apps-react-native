import { Formik } from 'formik';
import { Text, View } from "react-native";
import Button from "../components/atoms/Button";
import InputForm from '../components/atoms/Form/InputForm';

const Hello = ({ navigation }) => {
    return (
        <View>
            <Formik
                initialValues={{ email: '', name: '' }}
                onSubmit={values => console.log(values)}
            >
                {({ handleChange, handleBlur, handleSubmit, values }) => (
                    <View>
                        <InputForm
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            value={values.name}
                            label={'Email'}
                            placeholder={'your email'}
                        />
                        <InputForm
                            onChangeText={handleChange('name')}
                            onBlur={handleBlur('name')}
                            value={values.name}
                            label={'Name'}
                            placeholder={'your name'}
                        />
                        <Button title={"Submit"} onPress={handleSubmit} />
                    </View>
                )}

            </Formik>
            <Text style={{ color: 'lightskyblue' }}>hello</Text>
            <Button title={"Back"} onPress={() => navigation.goBack()} />
        </View>
    )
}
export default Hello