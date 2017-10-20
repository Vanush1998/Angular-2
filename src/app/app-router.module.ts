import {SignUpComponent} from "./sign-up.component";
import {SignInComponent} from "./sign-in.component";
import {UserPageComponent} from "./user-page.component";
import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";

const appRoutes: Routes = [
  {path: '', redirectTo: 'SignInPage', pathMatch: 'full'},
  {path: 'SignInPage', component: SignInComponent},
  {path: 'UserPage', component: UserPageComponent},
  {path: 'SignUpPage', component: SignUpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRouterModule {
}
