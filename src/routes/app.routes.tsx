import React from 'react';
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon as IIcon } from '@expo/vector-icons/build/createIconSet';
import { Feather, AntDesign } from '@expo/vector-icons';

import Conversations from './conversations.routes';

const Tab = createBottomTabNavigator();

interface IRouteIconProps {
  [key: string]: {
    lib: IIcon<string, string>;
    name: string;
  };
}

const icons: IRouteIconProps = {
  Stats: {
    lib: Feather,
    name: 'slack',
  },
  Connections: {
    lib: Feather,
    name: 'phone',
  },
  Camera: {
    lib: Feather,
    name: 'camera',
  },
  Conversations: {
    lib: AntDesign,
    name: 'message1',
  },
  Settings: {
    lib: Feather,
    name: 'settings',
  },
};

const disabled = ['Conversation'];

const AppRoutes: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Conversations"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            const { lib: Icon, name } = icons[route.name];

            return <Icon name={name} size={size} color={color} />;
          },
          tabBarVisible: !!disabled.find(
            name => name !== getFocusedRouteNameFromRoute(route),
          ),
        })}
        tabBarOptions={{
          style: {
            backgroundColor: '#171717',
            borderTopColor: '#171717',
          },
          activeTintColor: '#33A0FC',
          inactiveTintColor: '#747474',
        }}
      >
        <Tab.Screen
          name="Stats"
          component={Conversations}
          options={{
            title: 'Status',
          }}
        />
        <Tab.Screen
          name="Connections"
          component={Conversations}
          options={{
            title: 'Ligações',
          }}
        />
        <Tab.Screen
          name="Camera"
          component={Conversations}
          options={{
            title: 'Câmera',
          }}
        />
        <Tab.Screen
          name="Conversations"
          component={Conversations}
          options={{
            title: 'Conversas',
          }}
        />
        <Tab.Screen
          name="Settings"
          component={Conversations}
          options={{
            title: 'Ajustes',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppRoutes;
