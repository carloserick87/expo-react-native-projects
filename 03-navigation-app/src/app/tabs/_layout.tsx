import { View, Text } from 'react-native'
import { Tabs } from 'expo-router'

import { Ionicons } from '@expo/vector-icons';


const TabsLayout = () => {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'green',tabBarShowLabel: false }}>
      <Tabs.Screen
        name="home/index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="home-outline" color={color} />,
        }}
      />
      <Tabs.Screen
        name="favorites/index"
        options={{
          title: 'Favoritos',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="star-outline" color={color} />,
        }}
      />
    </Tabs>
  )
}

export default TabsLayout