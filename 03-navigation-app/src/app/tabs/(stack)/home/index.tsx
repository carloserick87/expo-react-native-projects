import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link, router } from 'expo-router';
import CustomButton from '../../../../../components/shared/CustomButton';

const HomeSreen = () => {
  return (
    <SafeAreaView>

    <View className='px-10 mt-5'>
        

        <CustomButton className='mb-2' color='primary' onPress={ ()=> router.push('/tabs/(stack)/products')}>Productos</CustomButton>

        <CustomButton className='mb-2' color='secondary' onPress={ ()=> router.push('/tabs/(stack)/profile')}>Perfil</CustomButton>

        <CustomButton className='mb-2' color='tertiary' onPress={ ()=> router.push('/tabs/(stack)/settings')}>Configuración</CustomButton>

        <Link href='/tabs/(stack)/products' asChild>
          <CustomButton variant='text-only' className='mb-10' color='primary'>Productos</CustomButton>
        </Link>
    </View>
        
    </SafeAreaView>
  )
}

export default HomeSreen