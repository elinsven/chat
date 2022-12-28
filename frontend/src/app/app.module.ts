import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TestComponent } from './test/test.component';
import { SignUpModule } from './sign-up/feature/sign-up.module';
import { SignInModule } from './sign-in/feature/sign-in.module';
import { ForgotPasswordModule } from './forgot-password/feature/forgot-password.module';
import { Test1Component } from './test1/test1.component';
import { Test1Module } from './test1/test1.module';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ForgotPasswordModule,
    FormsModule,
    GraphQLModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    SignInModule,
    SignUpModule,
    Test1Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
