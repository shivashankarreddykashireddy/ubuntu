import { FirstService } from './0.services/first.service';
import { SecondService } from './0.services/second.service';
import { ThirdService } from './0.services/third.service';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Http, Response } from '@angular/http';

import { AppComponent } from './app.component';
import { FirstComponent } from './1.single-service-single-component/first/first.component';
import { SecondComponent } from './2.single-service-two-components/second/second.component';
import { ThirdComponent } from './2.single-service-two-components/third/third.component';
import { FourthComponent } from './3.two-service-single-component/fourth/fourth.component';
import { FifthComponent } from './4.data-from-json-to-service-to-component/fifth/fifth.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    FourthComponent,
    FifthComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [FirstService, SecondService, ThirdService],
  bootstrap: [AppComponent]
})
export class AppModule { }
