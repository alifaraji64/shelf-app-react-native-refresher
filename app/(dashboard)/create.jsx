import { Keyboard, Pressable, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native'
import Spacer from "../../components/spacer"
import ThemedText from "../../components/themedText"
import ThemedView from "../../components/themedView"
import { useBook } from '../../hooks/useBook'
import ThemedTextInput from '../../components/themedTextInput'
import { useState } from 'react'
import { useRouter } from 'expo-router'
import { Colors } from '../../constants/colors'
const Create = () => {
  const [author, setauthor] = useState('')
  const [title, settitle] = useState('')
  const [description, setdescription] = useState('')
  const [loading, setloading] = useState(false)
  const [error, seterror] = useState(null)
  const { createBook } = useBook()
  const router = useRouter()


  const handleSubmit = async () => {
    if (!title.trim() || !author.trim() || !description.trim()) return;
    setloading(true)
    try {
      await createBook({ title, author, description })
      setauthor('')
      setdescription('')
      settitle('')
      router.replace('/books')
    } catch (error) {
      console.log(error);
      seterror(error.message)
    }
    finally {
      setloading(false)
    }
  }
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ThemedView className={'flex-1 justify-center items-center'}>

        <ThemedText title={true} style={styles.heading}>
          Add a New Book
        </ThemedText>
        <Spacer />
        <ThemedTextInput
          className={'border-gray-300 border-2 text-gray-200'}
          style={styles.input}
          placeholder="Book Title"
          value={title}
          onChangeText={settitle}
        />
        <Spacer />
        <ThemedTextInput
          className={'border-gray-300 border-2 text-gray-200'}
          style={styles.input}
          placeholder="Author"
          value={author}
          onChangeText={setauthor}
        />
        <Spacer />

        <ThemedTextInput
          className={'border-gray-300 border-2 text-gray-200'}
          style={styles.multiline}
          placeholder="Book Description"
          value={description}
          onChangeText={setdescription}
          multiline={true}
        />
        <Spacer />
        {error && <><Text style={styles.error}>{error}</Text><Spacer /></>}
        <Pressable
          disabled={loading}
          onPress={handleSubmit}
          style={{ backgroundColor: Colors.primary }}
          className={`active:opacity-80 p-4 rounded-md`}>
          <Text style={{ color: '#fff' }}>
            {loading ? "Saving..." : "Create Book"}
          </Text>
        </Pressable>

      </ThemedView>
    </TouchableWithoutFeedback>

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
  input: {
    padding: 20,
    borderRadius: 6,
    alignSelf: 'stretch',
    marginHorizontal: 40,
  },
  multiline: {
    padding: 20,
    borderRadius: 6,
    minHeight: 100,
    alignSelf: 'stretch',
    marginHorizontal: 40,
  },
  error: {
        color: Colors.warning,
        padding: 10,
        backgroundColor: '#f5c1c8',
        borderColor: Colors.warning,
        borderWidth: 1,
        borderRadius: 6,
        marginHorizontal: 10,
    }
})