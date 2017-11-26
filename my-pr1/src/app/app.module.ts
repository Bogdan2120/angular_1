import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HelloWordComponent } from './hello-word/hello-word.component';
import { MyFirstComp1Component } from './my-first-comp1/my-first-comp1.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWordComponent,
    MyFirstComp1Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
