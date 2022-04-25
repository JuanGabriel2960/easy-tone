import React, { useEffect } from 'react'
import { View } from 'react-native';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { theme } from '../theme';
import { Card } from '../components/Card';
import { homeCards } from '../data';


interface Props extends DrawerScreenProps<any, any> { };

export const Home = ({ navigation }: Props) => {

  const { container, column, alignCenter } = theme;

  useEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  }, [])

  return (
    <View style={[container, column, alignCenter]}>

      {
        homeCards.map(({ title, description, icon, gradient }) => (
          <Card key={title} title={title} description={description} icon={icon} gradient={gradient} />
        ))
      }
    </View>
  )
}
