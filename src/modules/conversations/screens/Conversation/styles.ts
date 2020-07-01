import styled from 'styled-components/native';
import { FlatList, Platform } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import { IMessage } from '../Dashboard';

interface IMessageProps {
  isOwner: boolean;
}

interface ISendMessageContainerProps {
  isFocused: boolean;
}

export const Wrapper = styled.KeyboardAvoidingView.attrs({
  behavior: Platform.OS === 'ios' ? 'padding' : undefined,
  enabled: true,
})`
  flex: 1;
  background: #171717;
`;

export const Container = styled.View`
  flex: 1;
  padding-top: ${Platform.OS === 'android' ? 150 : 40}px;
`;

export const Header = styled.View`
  height: 60px;
  background: #171717;
  padding: 0 25px;

  flex-direction: row;
  align-items: center;
`;

export const HeaderAdjust = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const BackButton = styled(RectButton)`
  flex-direction: row;
  align-items: center;
`;

export const BackButtonText = styled.Text`
  color: #33a0fc;
  font-size: 20px;
`;

export const UserContainer = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  margin-left: 15px;
`;

export const UserAvatar = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  margin-right: 10px;
`;

export const UserInfo = styled.View``;

export const UserName = styled.Text`
  color: #f4ede8;
  font-size: 18px;
  font-weight: 500;
`;

export const UserStats = styled.Text`
  color: #6b6b6b;
  font-size: 14px;
`;

export const MessagesContainer = styled.View`
  flex: 1;
  background: #010101;
  padding: 0 20px;
`;

export const MessagesList = styled(FlatList as new () => FlatList<IMessage>)`
  padding: 10px 0;
  margin-top: 20px;
`;

export const Message = styled.View<IMessageProps>`
  flex: 0;
  flex-direction: row;
  background: ${({ isOwner }) => (isOwner ? '#0F5348' : '#3C3C3E')};
  margin-left: ${({ isOwner }) => (isOwner ? 'auto' : 0)};
  margin-right: ${({ isOwner }) => (!isOwner ? 'auto' : 0)};
  margin-bottom: 15px;

  border-radius: 8px;
  padding: 10px;
`;

export const MessageContent = styled.Text`
  color: #fff;
  font-size: 16px;
  margin-right: 15px;
  max-width: 240px;
  position: relative;
`;

export const MessageDate = styled.View`
  margin-top: auto;
  flex-direction: row;
`;

export const MessageDateText = styled.Text<IMessageProps>`
  color: ${({ isOwner }) => (isOwner ? '#37736b' : '#59595B')};
  font-size: 14px;
  margin-left: 5px;
`;

export const SendMessageContainer = styled.View<ISendMessageContainerProps>`
  flex-direction: row;
  align-items: center;
  padding: 10px;
  margin-bottom: ${({ isFocused }) => (!isFocused ? 30 : 0)}px;
`;

export const SendMessageInput = styled.View`
  flex: 1;
  background: #2c2c2e;

  padding: 10px 10px 10px 20px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  border-radius: 8px;
  margin: 0 10px;
`;

export const SendMessageInputText = styled.TextInput`
  max-width: 220px;
  color: #f8ede8;
`;

export const IconButton = styled.TouchableOpacity``;
