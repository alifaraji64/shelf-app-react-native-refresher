import { StyleSheet } from 'react-native'

import Spacer from "../../components/spacer"
import ThemedText from "../../components/themedText"
import ThemedView from "../../components/themedView"

const Create = () => {
  return (
    <ThemedView className={'flex-1 justify-center items-center'}>

      <ThemedText title={true} style={styles.heading}>
        Add a New Book
      </ThemedText>
      <Spacer />

    </ThemedView>
  )
}

export default Create

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
})