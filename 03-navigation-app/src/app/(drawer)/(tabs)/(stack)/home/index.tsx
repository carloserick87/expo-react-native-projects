import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link, router, useNavigation } from 'expo-router';
import CustomButton from '../../../../../../components/shared/CustomButton';
import { DrawerActions } from 'expo-router/build/react-navigation/routers/DrawerRouter';

const HomeSreen = () => {

  const navigation = useNavigation();

  const onToggleDrawer = () =>{
    navigation.dispatch( DrawerActions.toggleDrawer())


  }

  return (
    <SafeAreaView>

    <View className='px-10 mt-5'>
        

        <CustomButton className='mb-2' color='primary' onPress={ ()=> router.push('/products')}>Productos</CustomButton>

        <CustomButton className='mb-2' color='secondary' onPress={ ()=> router.push('/profile')}>Perfil</CustomButton>

        <CustomButton className='mb-2' color='tertiary' onPress={ ()=> router.push('/settings')}>Configuración</CustomButton>

        <Link href='/products' asChild>
          <CustomButton variant='text-only' className='mb-10' color='primary'>Productos</CustomButton>
        </Link>

        <CustomButton onPress={onToggleDrawer} >
          Abrir menú
        </CustomButton>



    </View>
        
    </SafeAreaView>
  )
}

export default HomeSreen