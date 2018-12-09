import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { routingModule } from './app.router';


import { DataService } from './services/data.service';
import { AppComponent } from './app.component';
import { ComponentOneComponent } from './component-one/component-one.component';
import { ComponentTwoComponent } from './component-two/component-two.component';
import { ParentComponent } from './parent/parent.component';
import { ChildrenComponent } from './children/children.component';
import { SendDataViaServiceComponent } from './send-data-via-service/send-data-via-service.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentOneComponent,
    ComponentTwoComponent,
    ParentComponent,
    ChildrenComponent,
    SendDataViaServiceComponent
  ],
  imports: [
    BrowserModule,
    routingModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
