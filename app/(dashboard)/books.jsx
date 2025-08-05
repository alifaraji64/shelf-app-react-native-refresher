import { StyleSheet } from 'react-native'

import Spacer from "../../components/spacer"
import ThemedText from "../../components/themedText"
import ThemedView from "../../components/themedView"

const Books = () => {
    return (
        <ThemedView className={'flex-1 items-center justify-center'}>
            {/* <Spacer /> */}
            <ThemedText title={true} style={styles.heading} >
                Your Reading List
            </ThemedText>
        </ThemedView>
    )
}

export default Books

const styles = StyleSheet.create({
    heading: {
        fontWeight: "bold",
        fontSize: 18,
        textAlign: "center",
    },
})