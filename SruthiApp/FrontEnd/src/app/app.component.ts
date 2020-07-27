import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'SampleProject';
  TICKER: string;
  NAME: string;
  SECURITY_TYPE: string;
  QUANTITY: number;
  PURCHASE_PRICE: number;
  PURCHASE_DATE: Date;
 


  constructor(private http: HttpClient) { }
  
  onSubmit(data)
  {
    this.http.post("http://127.0.0.1:5000/data",data)
    .subscribe((result)=>{
      console.log("result",result)
    })
    console.log(data);

  }


}
