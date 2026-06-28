import { Link, Redirect } from 'expo-router';
import { View, Text} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


const App = () => {

    return <Redirect href="/home"/>;




//   return (
//     <SafeAreaView className='flex-1'>

//     <View className="mt-6 mx-2.5">
//       <Text className="text-5xl" style={{ fontFamily: 'WorkSans-Black' }}>Hello World!</Text>
//       <Text className="text-4xl font-work-black text-primary">Hello World!</Text>
//       <Text className="text-3xl font-work-medium text-secondary">Hello World!</Text>
//       <Text className="text-2xl font-work-light text-secondary-100">Hello World!</Text>
//       <Text className="text-xl text-tertiary">Hello World!</Text>
//       <Link href='/products'>Productos</Link>
//     </View>

//     </SafeAreaView>
//   )
}

export default App