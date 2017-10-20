import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {SignInComponent} from './sign-in.component';
import {UserPageComponent} from './user-page.component';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {SignUpComponent} from './sign-up.component';
import {HashService} from './hash.service';
import {ActiveUserService} from './active-user.service';
import {Md5} from 'ts-md5/dist/md5';
import {AppRouterModule} from "./app-router.module";

@NgModule({
  imports: [BrowserModule, AppRouterModule, HttpModule, FormsModule],
  declarations: [AppComponent, UserPageComponent, SignInComponent, SignUpComponent],
  bootstrap: [AppComponent],
  providers: [Md5, HashService, ActiveUserService]
})
export class AppModule {
}
