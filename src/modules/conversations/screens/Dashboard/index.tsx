import React, { useEffect, useState, useCallback } from 'react';
import { Feather } from '@expo/vector-icons';
import { parseISO, format } from 'date-fns';
import { useNavigation } from '@react-navigation/native';

import Header from '../../../../components/Header';

import api from '../../../../services/api';

import {
  Wrapper,
  EditButton,
  EditButtonText,
  CreateConversationButton,
  Container,
  Section,
  SectionTitle,
  SectionInput,
  SectionInputText,
  OptionsContainer,
  TransmissionListButton,
  TransmissionListButtonText,
  CreateGroupButton,
  CreateGroupButtonText,
  ConversationsList,
  Conversation,
  ConversationUser,
  UserAvatar,
  ConversationInfo,
  UserName,
  ConversationLastMessage,
  ConversationLastMessageText,
  ConversationDate,
  ConversationDateText,
  ConversationPending,
  ConversationPendingText,
} from './styles';

export interface IPeople {
  id: number;
  name: string;
  avatar_url: string;
  stats: 'Online' | 'Digitando';
}

export interface IMessage {
  id: number;
  owner_id: number;
  type: 'text' | 'audio' | 'file';
  content: string;
  created_at: string;
  visualized: boolean;
  hourFormatted: string;
  contentFormatted: string;
}

export interface IConversation {
  id: number;
  peoples_id: number[];
  peoples: IPeople[];
  messages: IMessage[];
  lastMessage: IMessage;
  secondPeople: IPeople;
  pending: number;
  fixed: boolean;
}

const Dashboard: React.FC = () => {
  const [people, setPeople] = useState<IPeople>({} as IPeople);
  const [conversations, setConversations] = useState<IConversation[]>([]);

  const { navigate } = useNavigation();

  useEffect(() => {
    setPeople({
      id: 1,
      name: 'Gabriel',
      avatar_url: 'https://api.adorable.io/avatars/285/abott@adorable.png',
      stats: 'Online',
    });
  }, []);

  useEffect(() => {
    async function loadConversations(): Promise<void> {
      const response = await api.get<IConversation[]>('conversations');

      const data = response.data.map(conversation => {
        const messages = conversation.messages.map(message => ({
          ...message,
          contentFormatted:
            message.content.length > 20
              ? `${message.content.substring(0, 25 - 3)}...`
              : message.content,
          hourFormatted: format(parseISO(message.created_at), 'HH:mm'),
        }));

        const lastMessage = messages[messages.length - 1];

        const pending = messages.filter(message => !message.visualized).length;

        const [secondPeople] = conversation.peoples.filter(
          p => p.id !== people.id,
        );

        return {
          ...conversation,
          messages,
          lastMessage,
          secondPeople,
          pending,
        };
      });

      setConversations(data);
    }

    loadConversations();
  }, [people.id]);

  const navigateToConversation = useCallback(
    (conversation: IConversation) => {
      navigate('Conversation', {
        conversations,
        conversation,
        people,
      });
    },
    [people, conversations, navigate],
  );

  return (
    <Wrapper>
      <Header>
        <EditButton>
          <EditButtonText>Editar</EditButtonText>
        </EditButton>
        <CreateConversationButton>
          <Feather name="edit" size={20} color="#33A0FC" />
        </CreateConversationButton>
      </Header>
      <Container>
        <Section>
          <SectionTitle>Conversas</SectionTitle>

          <SectionInput>
            <Feather name="search" size={20} color="#858587" />

            <SectionInputText
              placeholder="Pesquisar"
              placeholderTextColor="#858587"
              returnKeyType="send"
              keyboardAppearance="dark"
            />
          </SectionInput>
        </Section>

        <OptionsContainer>
          <TransmissionListButton>
            <TransmissionListButtonText>
              Lista de transmissão
            </TransmissionListButtonText>
          </TransmissionListButton>

          <CreateGroupButton>
            <CreateGroupButtonText>Novo grupo</CreateGroupButtonText>
          </CreateGroupButton>
        </OptionsContainer>

        <ConversationsList
          data={conversations}
          showsVerticalScrollIndicator={false}
          keyExtractor={({ id }) => String(id)}
          renderItem={({ item: conversation }) => (
            <Conversation onPress={() => navigateToConversation(conversation)}>
              <ConversationUser>
                <UserAvatar
                  source={{ uri: conversation.secondPeople.avatar_url }}
                />

                <ConversationInfo>
                  <UserName>{conversation.secondPeople.name}</UserName>
                  <ConversationLastMessage>
                    {conversation.lastMessage.owner_id === people.id && (
                      <Feather
                        name="check-circle"
                        size={15}
                        color={
                          conversation.lastMessage.visualized
                            ? '#33a0fc'
                            : '#878787'
                        }
                      />
                    )}
                    <ConversationLastMessageText>
                      {conversation.lastMessage.contentFormatted}
                    </ConversationLastMessageText>
                  </ConversationLastMessage>
                </ConversationInfo>
              </ConversationUser>
              <ConversationDate>
                <ConversationDateText>
                  {conversation.lastMessage.hourFormatted}
                </ConversationDateText>
                {conversation.fixed && conversation.pending <= 0 && (
                  <Feather name="tag" size={16} color="#858587" />
                )}
                {conversation.pending > 0 && (
                  <ConversationPending>
                    <ConversationPendingText>
                      {conversation.pending}
                    </ConversationPendingText>
                  </ConversationPending>
                )}
              </ConversationDate>
            </Conversation>
          )}
        />
      </Container>
    </Wrapper>
  );
};

export default Dashboard;
