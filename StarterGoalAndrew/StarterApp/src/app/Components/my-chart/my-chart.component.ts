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
    console.log('x is:', this.AppComponent.data)
    console.log('the type of x is ', typeof this.AppComponent.data)
    console.log('the data is at index 0 is ', this.AppComponent.data[0])

       
    let x = this.AppComponent.data;
    console.log('returned data at index 0 is ', x[0]);
      
      

    //let x = this.AppComponent.data;
    //let x = [...this.AppComponent.data]
    //console.log('x is:', x)
    //console.log('the type of x is ', typeof x)
    //console.log('x at index 0 is ', x[0])
    //console.log('the type of x is ', typeof this.returnedData)
    //console.log('x at index 0 is ', this.returnedData[0])



    /*this.AppComponent.fetchPriceData();
    let y = this.AppComponent.priceData;

    console.log('y is ', y)
    console.log('the type of y is', typeof y)
    console.log('y at 0 is', y[0])*/



   //this.returnedData = this.AppComponent.fetchData()
   //console.log(this.returnedData)
    
   
    var myChart = new Chart("myChart", {
      type: 'line',
      data: {
          labels: ['2020-07-28 22:03:15.77637', '2020-07-28 22:04:16.836549', '2020-07-28 22:05:17.89912', 'April', 'May', 'June'],
          datasets: [{
              label: 'AAPL STOCK',
              data: 
              [170.84, 130.84, 1330.84],
              backgroundColor: [
                'rgba(75, 192, 192, 1)',
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
              ],
              borderWidth: 1
          },
          {
            label: 'GOOGLE STOCK',
            data: 
            [120.84, 1300.84, 130.84],
            backgroundColor: [
              'rgba(54, 162, 235, 1)',
            ],
            borderColor: [
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        },]
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

  for(let i=0;i<10;i++){
    myChart.data.datasets.push({
      label: 'apple',
      data: 
        [1,23,4],
        backgroundColor: [
          'rgba(75, 192, 192, 1)',
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
        ],
        borderWidth: 1
    });
  } myChart.update();


  }

}
