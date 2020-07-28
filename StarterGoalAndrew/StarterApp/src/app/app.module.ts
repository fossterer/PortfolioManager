import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule }    from '@angular/common/http';
import { MyChartComponent } from './Components/my-chart/my-chart.component'; //makes http client availible everywhere

@NgModule({
  declarations: [
    AppComponent,
    MyChartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, //add http to imports
    AppRoutingModule,
    FormsModule
  ],
  providers: [AppComponent, MyChartComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
