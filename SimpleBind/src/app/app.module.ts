import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { SimpleBindComponent } from './simple-bind/simple-bind.component';

@NgModule({
  declarations: [
    SimpleBindComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [SimpleBindComponent]
})
export class AppModule { }
