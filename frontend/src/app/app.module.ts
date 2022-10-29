import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInPageComponent } from './sign-in-page/sign-in-page.component';
import { ButtonComponent } from './common/components/button/button.component';
import { InputComponent } from './common/components/input/input.component';
import { DividerComponent } from './common/components/divider/divider.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInPageComponent,
    ButtonComponent,
    InputComponent,
    DividerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
