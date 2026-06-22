import { View, Text } from 'react-native'
import { globalStyles } from '@/styles/global-styles'


const CalculatorApp = () => {
  return (
    <View style={ globalStyles.calculatorContainer}>
      <Text style={ globalStyles.mainResult}>50x50</Text>
      <Text style={ globalStyles.subResult}>250</Text>
    </View>
  )
}

export default CalculatorApp