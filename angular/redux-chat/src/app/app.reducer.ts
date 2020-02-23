import { UsersReducer, UsersState, initialState as initialUsersState } from './user/users.reducer';
import { ThreadsState, ThreadsReducer, initialState as initialThreadsState } from './thread/threads.reducer';
import { Reducer, combineReducers } from 'redux';

export interface AppState {
    users: UsersState;
    threads: ThreadsState;
}

export const initialState: AppState = {
    users: initialUsersState,
    threads: initialThreadsState
};

const rootReducer: Reducer<AppState> = combineReducers<AppState> ({
    users: UsersReducer,
    threads: ThreadsReducer
});

export default rootReducer;

