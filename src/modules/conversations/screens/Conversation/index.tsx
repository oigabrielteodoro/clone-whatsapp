import React, { useMemo, useCallback, useState } from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';
import { AntDesign, Feather } from '@expo/vector-icons';

import { IConversation, IPeople } from '../Dashboard';

import {
  Wrapper,
  Container,
  Header,
  HeaderAdjust,
  BackButton,
  BackButtonText,
  UserContainer,
  UserAvatar,
  UserInfo,
  UserName,
  UserStats,
  MessagesContainer,
  MessagesList,
  Message,
  MessageContent,
  MessageDate,
  MessageDateText,
  SendMessageContainer,
  SendMessageInput,
  SendMessageInputText,
  IconButton,
} from './styles';

interface IRouteParams {
  conversations: IConversation[];
  conversation: IConversation;
  people: IPeople;
}

const Conversation: React.FC = () => {
  const { params } = useRoute();
  const { conversation, conversations, people } = params as IRouteParams;

  const { goBack } = useNavigation();

  const [writingMessage, setWritingMessage] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const navigateToBack = useCallback(() => {
    goBack();
  }, [goBack]);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, [setIsFocused]);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
  }, [setIsFocused]);

  const handleWritingMessage = useCallback(
    (data: string) => {
      setWritingMessage(data);
    },
    [setWritingMessage],
  );

  const lengthPendingConversations = useMemo(() => {
    return conversations.filter(
      findConversation => findConversation.pending > 0,
    ).length;
  }, [conversations]);

  const writingMessageIsEmpty = useMemo(() => {
    return writingMessage.length <= 0;
  }, [writingMessage]);

  return (
    <Wrapper>
      <Container>
        <Header>
          <HeaderAdjust>
            <BackButton onPress={navigateToBack}>
              <AntDesign name="back" size={20} color="#33a0fc" />
              <BackButtonText style={{ marginLeft: 10 }}>
                {lengthPendingConversations}
              </BackButtonText>
            </BackButton>
            <UserContainer>
              <UserAvatar
                source={{ uri: conversation.secondPeople.avatar_url }}
              />
              <UserInfo>
                <UserName>{conversation.secondPeople.name}</UserName>
                <UserStats>{conversation.secondPeople.stats}</UserStats>
              </UserInfo>
            </UserContainer>
          </HeaderAdjust>
          <HeaderAdjust style={{ marginLeft: 'auto' }}>
            <AntDesign name="videocamera" size={20} color="#33a0fc" />
            <Feather
              style={{ marginLeft: 15 }}
              name="phone"
              size={20}
              color="#33a0fc"
            />
          </HeaderAdjust>
        </Header>
        <MessagesContainer>
          <MessagesList
            data={conversation.messages}
            keyExtractor={({ id }) => String(id)}
            renderItem={({ item: message }) => (
              <Message isOwner={message.owner_id === people.id}>
                <MessageContent>{message.content}</MessageContent>
                <MessageDate>
                  {message.owner_id === people.id && (
                    <Feather
                      name="check-circle"
                      size={15}
                      color={message.visualized ? '#33a0fc' : '#878787'}
                    />
                  )}
                  <MessageDateText isOwner={message.owner_id === people.id}>
                    {message.hourFormatted}
                  </MessageDateText>
                </MessageDate>
              </Message>
            )}
          />
        </MessagesContainer>
        <SendMessageContainer isFocused={isFocused}>
          <Feather
            style={{ marginHorizontal: 5 }}
            name="plus"
            size={20}
            color="#33a0fc"
          />

          <SendMessageInput>
            <SendMessageInputText
              multiline
              placeholder="Escreva uma mensagem"
              placeholderTextColor="#858587"
              returnKeyType="none"
              keyboardAppearance="dark"
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
              onChangeText={text => handleWritingMessage(text)}
              value={writingMessage}
            />

            {writingMessageIsEmpty ? (
              <AntDesign name="scan1" size={20} color="#33a0fc" />
            ) : (
              <Feather name="send" size={20} color="#33a0fc" />
            )}
          </SendMessageInput>

          {writingMessageIsEmpty && (
            <>
              <Feather
                style={{ marginHorizontal: 5 }}
                name="camera"
                size={20}
                color="#33a0fc"
              />

              <IconButton>
                <Feather
                  style={{ marginHorizontal: 5 }}
                  name="mic"
                  size={20}
                  color="#33a0fc"
                />
              </IconButton>
            </>
          )}
        </SendMessageContainer>
      </Container>
    </Wrapper>
  );
};

export default Conversation;
