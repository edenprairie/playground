import { Component, Inject } from '@angular/core';
import * as Redux from 'redux';
import { Thread } from '../thread/thread.model';
import { AppStore } from '../app.store';
import { AppState } from '../app.reducer';
import { getAllThreads, getCurrentThread } from '../app.reselect';
import * as ThreadActions from '../thread/thread.actions';
@Component({
  selector: 'chat-threads',
  templateUrl: './chat-threads.component.html',
  styleUrls: ['./chat-threads.component.css']
})
export class ChatThreadsComponent {

  threads: Thread[];
  currentThreadId: string;

  constructor(@Inject(AppStore) private store: Redux.Store<AppState>) { 
    store.subscribe(() => this.updateState());
    this.updateState();
  }

  updateState() {
    const state = this.store.getState();
    this.threads = getAllThreads(state);
    this.currentThreadId = getCurrentThread(state).id;
  }

  handleThreadClicked(thread: Thread) {
    this.store.dispatch(ThreadActions.selectThread(thread));
  }
}
