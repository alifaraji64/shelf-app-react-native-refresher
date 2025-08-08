import { Tabs, useRouter } from "expo-router"
import { useColorScheme, Text, ActivityIndicator } from "react-native";
import { Colors } from "../../constants/colors";
import { Ionicons } from "@expo/vector-icons";
import { useEffect } from "react";
import { useUser } from "../../hooks/useUser";
import ThemedView from "../../components/themedView";
import ThemedText from "../../components/themedText";
const _layout = () => {
    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme] ?? Colors.light

    const { user, authChecked } = useUser()
    const router = useRouter()
    useEffect(() => {
        console.log('tgtg');
        if (!user && authChecked) {
            router.replace('/login')
        }

    }, [user, authChecked])
    if (!user) {
        return <ThemedView className={'flex-1 justify-center items-center'}>
            <ThemedText>Loading...</ThemedText>
            <ActivityIndicator size={'large'} color={theme.text} />
        </ThemedView>
    }

    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: theme.navBackground,
                    padding: 10,
                    height: 90
                },
                tabBarActiveTintColor: theme.iconColorFocused,
                tabBarInactiveTintColor: theme.iconColor
            }}

        >
            <Tabs.Screen name="profile"
                options={
                    {
                        title: 'Profile', tabBarIcon: ({ focused }) =>
                            <Ionicons name={focused ? "person" : "person-outline"}
                                size={24}
                                color={focused ? theme.iconColorFocused : theme.iconColor} />
                    }
                }
            />
            <Tabs.Screen name="books"
                options={
                    {
                        title: 'Books', tabBarIcon: ({ focused }) =>
                            <Ionicons name={focused ? "book" : "book-outline"}
                                size={24}
                                color={focused ? theme.iconColorFocused : theme.iconColor} />
                    }
                }
            />
            <Tabs.Screen name="create"
                options={
                    {
                        title: 'Create', tabBarIcon: ({ focused }) =>
                            <Ionicons name={focused ? "create" : "create-outline"}
                                size={24}
                                color={focused ? theme.iconColorFocused : theme.iconColor} />
                    }
                }
            />
            <Tabs.Screen name="books/[id]"
                options={
                    {href:null}
                }
            />

        </Tabs>
    )
}

export default _layout