import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [
    // declare Component, Directive, Pipes before using it
    AppComponent,
    UsersComponent,
  ],
  imports: [
    // Import the modules - FormsModule, HttpClientModule, RouterModule etc
    BrowserModule,
    FormsModule,
  ],
  providers: [], // Service
  bootstrap: [AppComponent],
})
export class AppModule {}
