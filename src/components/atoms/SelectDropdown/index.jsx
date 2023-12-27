import { StyleSheet, Text, View } from 'react-native'
import SelectDropdown from 'react-native-select-dropdown'


const Select = ({label, data}) => {
    return (
        <View style={styles.container}>
            {label ? <Text style={styles.labelStyle}>{label}</Text> : null}
            <SelectDropdown
                data={data}
                onSelect={(selectedItem, index) => {
                    console.log('selectedItem', selectedItem, index)
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                    console.log('selectedItem', selectedItem)
                    // text represented after item is selected
                    // if data array is an array of objects then return selectedItem.property to render after item is selected
                    return selectedItem
                }}
                rowTextForSelection={(item, index) => {
                    console.log('item', item)
                    // text represented for each item in dropdown
                    // if data array is an array of objects then return item.property to represent item in dropdown
                    return item
                }}
                search={true}
                buttonStyle={styles.input}
                dropdownStyle={styles.dropdownStyle}
            />
        </View>
    )
}
export default Select

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10
    },
    input: {
        backgroundColor: 'rgb(203 213 225)',
        borderColor: 'gray',
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 8,
        paddingHorizontal: 12,
        fontSize: 16,
        width: '100%',
    },
    dropdownStyle: {
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 16,
        width: '100%',
    },
    labelStyle: {
        marginBottom: 4,
        fontSize: 18,
        fontWeight: '500'
    },
})