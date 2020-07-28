import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { disableDebugTools } from '@angular/platform-browser';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-my-chart',
  templateUrl: './my-chart.component.html',
  styleUrls: ['./my-chart.component.css']
})
export class MyChartComponent implements OnInit {
  returnedData: any
  returnedPriceData: any
  constructor(private AppComponent: AppComponent) { }

  ngOnInit(): void {
    
    this.AppComponent.fetchData();
    let x = this.AppComponent.data;
    console.log('X is:', x)
    console.log(x[0])

    //console.log("the thing is ", x[0][0])


    this.AppComponent.fetchPriceData();
    let y = this.AppComponent.priceData;
    console.log(y)
    console.log(typeof y[0])


   //this.returnedData = this.AppComponent.fetchData()
   //console.log(this.returnedData)
   
    var myChart = new Chart("myChart", {
      type: 'line',
      data: {
          labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June'],
          datasets: [{
              label: 'PORTFOLIO VIEW',
              data: y,
              backgroundColor: [
                'rgba(75, 192, 192, 1)',
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true
                  }
              }]
          }
      }
  });
  }

}
