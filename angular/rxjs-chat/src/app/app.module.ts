import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ChatWindowComponent } from './chat-window/chat-window.component';
import { ChatThreadsComponent } from './chat-threads/chat-threads.component';
import { ChatThreadComponent } from './chat-thread/chat-thread.component';
import { ChatPageComponent } from './chat-page/chat-page.component';
import { ChatNavBarComponent } from './chat-nav-bar/chat-nav-bar.component';
import { ChatMessageComponent } from './chat-message/chat-message.component';
import { FromNowPipe } from './pipes/from-now.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ChatWindowComponent,
    ChatThreadsComponent,
    ChatThreadComponent,
    ChatPageComponent,
    ChatNavBarComponent,
    ChatMessageComponent,
    FromNowPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
