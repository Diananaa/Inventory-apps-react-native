import { StyleSheet, Text, View } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';

const Select = ({ label, data, onChangeText, value, error, defaultOption }) => {
    return (
        <View style={styles.container}>
            {label ? <Text style={styles.labelStyle}>{label}</Text> : null}
            <SelectList
                setSelected={onChangeText}
                data={data}
                save="key" //type to save of data
                onSelect={() => value}
                boxStyles={styles.boxStyles}
                inputStyles={styles.textStyle}
                dropdownTextStyles={styles.textStyle}
                defaultOption={defaultOption} //key type is string
            />
            {
                error ? (
                    <Text style={styles.errorStyle}>{error}</Text>
                ) : null
            }
        </View>
    )
}
export default Select

const styles = StyleSheet.create({
    labelStyle: {
        marginBottom: 4,
        fontSize: 18,
        fontWeight: '500'
    },
    boxStyles: {
        backgroundColor: 'rgb(203 213 225)',
        borderColor: 'rgb(203 213 225)',
        borderRadius: 4
    },
    textStyle: {
        fontSize: 16
    },
    errorStyle: {
        color: 'rgb(225 29 72)'
    }

})