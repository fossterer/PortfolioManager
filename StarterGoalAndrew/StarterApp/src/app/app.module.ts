import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { appRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { MyChartComponent } from './Components/my-chart';
import { HttpClientModule }    from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    MyChartComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule, 
    appRoutingModule,
    FormsModule
  ],
  providers: [AppComponent, MyChartComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
