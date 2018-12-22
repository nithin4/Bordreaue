import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { BordreauService } from './BordreauService';


@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    LoginpageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    BordreauService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
