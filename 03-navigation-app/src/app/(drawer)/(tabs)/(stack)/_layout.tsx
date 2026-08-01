import Ionicons from '@expo/vector-icons/build/Ionicons';
import { Stack, useNavigation } from 'expo-router';
import { DrawerActions } from 'expo-router/build/react-navigation/routers/DrawerRouter';
import { router } from 'expo-router';


const StackLayout = () => {

  const navigation = useNavigation();

  const onHeaderLeftClick = (canGoBack: boolean) =>{
    if(canGoBack) {
      router.back();
      return;
    }

    navigation.dispatch(DrawerActions.toggleDrawer);
  };

  return (
   <Stack 
     screenOptions={{
        headerShown: true,
        headerShadowVisible: false,
        contentStyle: { backgroundColor: 'white',
         },
         headerLeft: ({tintColor, canGoBack}) =>(
         <Ionicons 
         name={canGoBack ? 'arrow-back-outline' : 'grid-outline'}
         className='mr-5'
         size={20}
         onPress={() => onHeaderLeftClick(canGoBack)} />
         ),
     }}>

        
     <Stack.Screen
       name="home/index"
       options={{
        title: 'Inicio',
       }}
     />

     <Stack.Screen
       name="products/index"
       options={{
        title: 'Productos',
       }}
     />

     <Stack.Screen
       name="profile/index"
       options={{
        title: 'Perfil',
       }}
     />

     <Stack.Screen
       name="settings/index"
       options={{
        title: 'Configuración',
       }}
     />
   </Stack>
  )
}

export default StackLayout