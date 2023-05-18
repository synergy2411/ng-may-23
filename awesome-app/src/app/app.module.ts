import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UserImageComponent } from './users/user-image/user-image.component';
import { UserInfoComponent } from './users/user-info/user-info.component';
import { LifeCycleComponent } from './demo/life-cycle/life-cycle.component';
import { UserCommentsComponent } from './users/user-comments/user-comments.component';
import { HighlightDirective } from './directives/highlight.directive';
import { PipeDemoComponent } from './demo/pipe-demo/pipe-demo.component';
import { CountryCodePipe } from './pipes/country-code.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { CommentFormComponent } from './users/comment-form/comment-form.component';

@NgModule({
  declarations: [
    // declare Component, Directive, Pipes before using it
    AppComponent,
    UsersComponent,
    UserImageComponent,
    UserInfoComponent,
    LifeCycleComponent,
    UserCommentsComponent,
    HighlightDirective,
    PipeDemoComponent,
    CountryCodePipe,
    FilterPipe,
    CommentFormComponent,
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
