import styled from 'styled-components/native';
import { FlatList } from 'react-native';

import { RectButton } from 'react-native-gesture-handler';

import { IConversation } from './index';

export const Wrapper = styled.SafeAreaView`
  flex: 1;
  background: #010101;
`;

export const EditButton = styled.TouchableOpacity``;

export const EditButtonText = styled.Text`
  color: #33a0fc;
  font-size: 18px;
`;

export const CreateConversationButton = styled.TouchableOpacity``;

export const Container = styled.View`
  flex: 1;
  padding: 0 20px;
`;

export const Section = styled.View``;

export const SectionTitle = styled.Text`
  font-size: 38px;
  font-weight: bold;
  color: #fff;
`;

export const SectionInput = styled.View`
  background: #1d1d1f;

  flex-direction: row;
  align-items: center;

  padding: 10px 20px;
  margin-top: 10px;
  border-radius: 8px;
`;

export const SectionInputText = styled.TextInput`
  color: #f4ede8;
  margin-left: 15px;
  flex: 1;
`;

export const OptionsContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-top: 25px;
`;

export const TransmissionListButton = styled.TouchableOpacity``;

export const TransmissionListButtonText = styled.Text`
  color: #33a0fc;
  font-size: 18px;
`;

export const CreateGroupButton = styled.TouchableOpacity``;

export const CreateGroupButtonText = styled.Text`
  color: #33a0fc;
  font-size: 18px;
`;

export const ConversationsList = styled(
  FlatList as new () => FlatList<IConversation>,
)`
  padding: 10px 0;
  margin-top: 20px;
`;

export const Conversation = styled(RectButton)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 20px;
  background: #171717;

  border-radius: 8px;
  padding: 10px 20px;

  margin-bottom: 10px;
`;

export const ConversationUser = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const UserAvatar = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 30px;
`;

export const ConversationInfo = styled.View`
  margin-left: 15px;
`;

export const UserName = styled.Text`
  color: #f4ede8;
  font-size: 20px;
  font-weight: 500;
`;

export const ConversationLastMessage = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 5px;
`;

export const ConversationLastMessageText = styled.Text`
  color: #858587;
  font-size: 16px;
  margin-left: 5px;
  margin-bottom: 1px;
`;

export const ConversationDate = styled.View`
  align-items: flex-end;
`;

export const ConversationDateText = styled.Text`
  color: #858587;
  margin-bottom: 10px;
`;

export const ConversationPending = styled.View`
  height: 20px;
  width: 20px;
  border-radius: 10px;
  background: #33a0fc;

  align-items: center;
  justify-content: center;
`;

export const ConversationPendingText = styled.Text`
  color: #f4ede8;
  font-size: 12px;
  font-weight: bold;
  margin-top: 1px;
  margin-left: 1px;
`;
