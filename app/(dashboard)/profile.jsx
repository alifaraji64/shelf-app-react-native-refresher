import { Pressable, StyleSheet } from 'react-native'
import Spacer from "../../components/spacer"
import ThemedText from "../../components/themedText"
import ThemedView from "../../components/themedView"
import { Colors } from '../../constants/colors'
import { useUser } from '../../hooks/useUser'

const Profile = () => {
    const { logout, user } = useUser()
    return (
        <ThemedView className={'flex-1 justify-center items-center'}>

            <ThemedText title={true} style={styles.heading}>
                {user && user.email}
            </ThemedText>
            <Spacer />

            <ThemedText>Time to start reading some books...</ThemedText>
            <Spacer />
            <Pressable
                onPress={logout}
                style={{ backgroundColor: Colors.primary }}
                className={`active:opacity-80 p-4 rounded-md`}>
                <ThemedText className={'!text-gray-200 text-center'}>Logout</ThemedText>
            </Pressable>

        </ThemedView>
    )
}

export default Profile

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