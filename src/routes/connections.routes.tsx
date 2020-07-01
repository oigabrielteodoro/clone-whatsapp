import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Dashboard from '../modules/conversations/screens/Dashboard';
import Conversation from '../modules/conversations/screens/Conversation';

const App = createStackNavigator();

const ConversationsRoutes: React.FC = () => {
  return (
    <App.Navigator initialRouteName="Dashboard" headerMode="none">
      <App.Screen name="Dashboard" component={Dashboard} />
      <App.Screen name="Conversation" component={Conversation} />
    </App.Navigator>
  );
};

export default ConversationsRoutes;
