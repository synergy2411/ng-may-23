import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import { DemoOneComponent } from './demo/demo-one/demo-one.component';
import { DemoTwoComponent } from './demo/demo-two/demo-two.component';
import { LifeCycleComponent } from './demo/life-cycle/life-cycle.component';
import { ObservableDemoComponent } from './demo/observable-demo/observable-demo.component';
import { PipeDemoComponent } from './demo/pipe-demo/pipe-demo.component';
import { HighlightDirective } from './directives/highlight.directive';
import { CountryCodePipe } from './pipes/country-code.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { CounterService } from './services/counter.service';
import { CommentFormComponent } from './users/comment-form/comment-form.component';
import { UserCommentsComponent } from './users/user-comments/user-comments.component';
import { UserImageComponent } from './users/user-image/user-image.component';
import { UserInfoComponent } from './users/user-info/user-info.component';
import { UsersComponent } from './users/users.component';
import { PostComponent } from './demo/post/post.component';
import { NewPostComponent } from './demo/post/new-post/new-post.component';
import { PostItemComponent } from './demo/post/post-item/post-item.component';
import { AuthInterceptor } from './services/interceptors/auth.interceptor';
import { LoggerInterceptor } from './services/interceptors/logger.interceptor';

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
    RegistrationComponent,
    DemoOneComponent,
    DemoTwoComponent,
    ObservableDemoComponent,
    PostComponent,
    NewPostComponent,
    PostItemComponent,
  ],
  imports: [
    // Import the modules - FormsModule, HttpClientModule, RouterModule etc
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    CounterService,
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: AuthInterceptor,
    },
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: LoggerInterceptor,
    },
  ], // Service
  bootstrap: [AppComponent],
})
export class AppModule {}
