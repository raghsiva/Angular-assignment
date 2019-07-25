import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {PopupModule} from 'ng2-opd-popup'
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    PopupModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
