import { StyleSheet, FlatList, Pressable, Text } from 'react-native'

import Spacer from "../../components/spacer"
import ThemedText from "../../components/themedText"
import ThemedView from "../../components/themedView"
import { useEffect } from 'react'
import { useUser } from '../../hooks/useUser'
import { useBook } from '../../hooks/useBook'
import ThemedCard from '../../components/themedCard'
import { Colors } from '../../constants/colors'
const Books = () => {
    const { books } = useBook()
    console.log('_______________')

    return (
        <ThemedView className={'flex-1 items-center justify-center'}>
            {/* <Spacer /> */}
            <ThemedText title={true} style={styles.heading} >
                Your Reading List
            </ThemedText>
            <Spacer></Spacer>
            <FlatList
                data={books}
                keyExtractor={(book) => book.$id}
                contentContainerStyle={styles.list}
                renderItem={({ item }) => (
                    <Pressable>
                        <ThemedCard style={styles.card}>
                            <ThemedText style={styles.title}>{item.title}</ThemedText>
                            <ThemedText>Written by {item.author}</ThemedText>
                        </ThemedCard>
                    </Pressable>
                )}
            />
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
    list: {
        marginTop: 40,
        paddingBottom:40
    },
    card: {
        width: "90%",
        marginHorizontal: "5%",
        marginVertical: 10,
        padding: 10,
        paddingLeft: 14,
        borderLeftColor: Colors.primary,
        borderLeftWidth: 4
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10,
    },
})