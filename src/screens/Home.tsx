import React, { useEffect } from 'react'
import { TouchableOpacity } from 'react-native';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { theme } from '../theme';
import { Card } from '../components/Card';
import { homeCards } from '../data';
import { ScrollView } from 'react-native-gesture-handler';

interface Props extends DrawerScreenProps<any, any> { };

export const Home = ({ navigation }: Props) => {

  const { container } = theme;

  useEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  }, [])

  return (
    <ScrollView style={[container]}>
      {
        homeCards.map(({ page, title, description, icon, gradient }) => (
          <TouchableOpacity style={{ width: '100%' }} activeOpacity={0.7} key={title} onPress={() => navigation.navigate(page, { title, gradient })}>
            <Card title={title} description={description} icon={icon} gradient={gradient} />
          </TouchableOpacity>
        ))
      }
    </ScrollView>
  )
}
