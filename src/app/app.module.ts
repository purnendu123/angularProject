import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TotalComponent } from './total/total.component';
import { HttpClientModule } from '@angular/common/http';
import { ClickItemComponent } from './click-item/click-item.component';

@NgModule({
  declarations: [
    AppComponent,
    TotalComponent,
    ClickItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
