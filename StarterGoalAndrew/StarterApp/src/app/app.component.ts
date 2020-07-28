import { Component } from '@angular/core';
import { TaskService } from './task.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'StarterApp';
  data = [];
  priceData = [];

  constructor(private taskService: TaskService, private http: HttpClient) { }

  TICKER: string;
  NAME: string;
  SECURITY_TYPE: string;
  QUANTITY: number;
  PURCHASE_PRICE: number;
  PURCHASE_DATE: Date;
 


  
  onSubmit(data)
  {
    this.http.post("http://127.0.0.1:5000/data",data)
    .subscribe((result)=>{
      console.log("result",result)
    })
    console.log(data);

  }

  createNewTable() {
    this.taskService.createTable('Testing').subscribe((response: any) =>{
      console.log(response);
      var txt = " "
      var x = " "
      for(x in response) {
        txt += response[x] + " "
      }

      document.getElementById("p1").innerHTML = txt;
      return response;
    })
  }
  clearData() {
    this.taskService.clearData('Testing').subscribe((response: any) =>{
      console.log(response);

      //document.getElementById("p2").innerHTML = txt;
      return response;
    })
  }
  fetchData() {
    return this.taskService.fetchData('Testing').subscribe((response: any) =>{
      console.log(response);
      var x = " "
      for(x in response){
        this.data[x] = response[x];

      }
    })
  }
  fetchPriceData() {
    return this.taskService.fetchPriceData('Testing').subscribe((response: any) =>{
      console.log(response);
      var x = " "
      for(x in response){

        this.priceData[x] = JSON.parse(response[x]);

      }
    })
  }

}
