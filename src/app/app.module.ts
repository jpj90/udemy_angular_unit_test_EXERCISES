import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LikeComponent } from './2- like-component/like.component'
import { VoterComponent } from './3- voter-component/voter.component';
import { UsersComponent } from './4- user-component/users.component';
import { UserService } from './4- user-component/user.service';
import { TextSummaryPipe } from './1- text-summary-pipe/text-summary.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LikeComponent,
    VoterComponent,
    UsersComponent,
    TextSummaryPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
