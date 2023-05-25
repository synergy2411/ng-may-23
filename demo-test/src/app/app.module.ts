import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { StudentComponent } from './components/student/student.component';
import { ReversePipe } from './pipes/reverse.pipe';

@NgModule({
  declarations: [AppComponent, StudentComponent, ReversePipe],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
