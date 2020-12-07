import { ThreadsState, ThreadsEntities } from './thread/threads.reducer';
import { createSelector } from 'reselect';
import { AppState } from './app.reducer';
import { Thread } from './thread/thread.model';
import { Message } from './message/message.model';
import { UsersState } from './user/users.reducer';

export const getThreadsState = (state): ThreadsState => state.threads;
export const getThreadsEntities = createSelector(
    getThreadsState,
    (state: ThreadsState) => state.entities 
);

export const getAllThreads = createSelector(
    getThreadsEntities,
    (entities: ThreadsEntities) => Object.keys(entities).map((threadId) => entities[threadId])
);

export const getUnreadMessagesCount = createSelector(
    getAllThreads,
    (threads: Thread[]) => threads.reduce(
        (unreadCount: number, thread: Thread) => {
          thread.messages.forEach((message: Message) => {
            if (!message.isRead) {
              ++unreadCount;
            }
          });
          return unreadCount;
        },
        0)
);
  
// This selector emits the current thread
export const getCurrentThread = createSelector(
    getThreadsEntities,
    getThreadsState,
    (entities: ThreadsEntities, state: ThreadsState) => entities[state.currentThreadId]
);

export const getAllMessages = createSelector(
    getAllThreads,
    (threads: Thread[]) => threads.reduce( // gather all messages
        (messages, thread) => [...messages, ...thread.messages],
        [])
        .sort((m1, m2) => m1.sentAt - m2.sentAt)
); // sort them by time

export const getUsersState = (state): UsersState => state.users;

export const getCurrentUser = createSelector(
  getUsersState,
  ( state: UsersState ) => state.currentUser );