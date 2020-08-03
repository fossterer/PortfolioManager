import { Component, OnInit, Directive } from '@angular/core';
import { Chart } from 'chart.js';
import { disableDebugTools } from '@angular/platform-browser';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-my-chart',
  templateUrl: './my-chart.component.html',
  styleUrls: ['./my-chart.component.css']
})
export class MyChartComponent implements OnInit {
  returnedData = [];
  returnedPriceData = [];
  constructor(private AppComponent: AppComponent) { }

  //chooses a random color for graph
  dynamicColors() {
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    return "rgba(" + r + "," + g + "," + b + ", 0.5)";
  }
  //Gets and stores data for x y plotting
  pointData(dictArr): any {
    let xyData = []
    for (var i = 0; i < dictArr.length; i++) {
      xyData.push({
        t: dictArr[i].time,
        y: dictArr[i].price
      })
    }
    console.log(xyData)
    return xyData

  }

  async ngOnInit(): Promise<void> {

    await this.AppComponent.fetchData();

    this.returnedData = this.AppComponent.data

    await this.AppComponent.fetchPriceData();

    this.returnedPriceData = this.AppComponent.priceData

    //Gets and stores the data for ticker names
    var y = null
    for (y in this.AppComponent.data) {
      this.returnedData[y] = JSON.parse(JSON.stringify(this.AppComponent.data[y]));
    }

    //set up the graph for plotting 
    var myChart = new Chart("myChart", {
      type: 'scatter',

      options: {
        scales: {
          xAxes: [{
            type: 'time',
            position: 'bottom'
          }],
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });

    //loop and stores x y datasets 
    for (let i = 0; i < this.returnedData.length; i++) {
      myChart.data.datasets.push({
        label: this.returnedData[i],
        data:
          //[1,2,3],
          this.pointData(this.returnedPriceData[i]),
        fill: false,
        lineTension: 0.1,
        showLine: true,
        backgroundColor: [
          this.dynamicColors(),
        ],
        borderColor: [
          this.dynamicColors(),
        ],
        borderWidth: 1,
        pointRadius: 0,
        pointBorderColor: "black",
        pointBackgroundColor: "white",
        pointBorderWidth: 1,
        pointHoverRadius: 8,
        pointHoverBackgroundColor: "white",
        pointHoverBorderColor: "green",
        pointHoverBorderWidth: 2,
        pointHitRadius: 10
      });
    } myChart.update();
  }

}
