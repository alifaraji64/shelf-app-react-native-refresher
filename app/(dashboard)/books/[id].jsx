import { ActivityIndicator, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import ThemedView from '../../../components/themedView'
import { useLocalSearchParams, useRouter } from 'expo-router'
import ThemedText from '../../../components/themedText'
import { useBook } from '../../../hooks/useBook'
import Spacer from '../../../components/spacer'
import ThemedCard from '../../../components/themedCard'
import ThemedLoader from '../../../components/themedLoader'
import { Colors } from '../../../constants/colors'
import Entypo from '@expo/vector-icons/Entypo';
const BookDetails = () => {
    const { id } = useLocalSearchParams()
    const { fetchBookById,deleteBook } = useBook()
    const [book, setbook] = useState(null)
    const router = useRouter()
    useEffect(() => {
        const fetchBook = async () => {
            setbook(null)
            try {
                const fetchedBook = await fetchBookById(id)
                setbook(fetchedBook)
                console.log(fetchedBook);
            } catch (error) {
                console.log(error.message);

            }

        }
        fetchBook()
    }, [id])
    if (!book) {
        return <ThemedLoader />
    }
    return (
        <ThemedView className={'flex-1  items-stretch'}>
            <ThemedCard className='m-5'>
                <ThemedText style={styles.title}>{book.title}</ThemedText>
                <ThemedText>Written by {book.author}</ThemedText>
                <Spacer />

                <ThemedText title={true}>Book description:</ThemedText>
                <Spacer className={'h-2'} />

                <ThemedText>{book.description}</ThemedText>
            </ThemedCard>
            <Pressable
                onPress={async() => {
                    
                    try {
                        await deleteBook(id)
                        router.replace('/books')
                    } catch (error) {
                        console.log(error.message);
                        
                    }
                }}
                style={{ backgroundColor: Colors.warning }}
                className={`active:opacity-80 p-4 rounded-md mx-auto`}>
                <ThemedText className={'!text-gray-200 text-center'}><Entypo name="trash" size={24} color="white" /></ThemedText>
            </Pressable>
        </ThemedView>
    )
}

export default BookDetails

const styles = StyleSheet.create({
    title: {
        fontSize: 22,
        marginVertical: 10,
    },
})