import { Component } from '@angular/core';
import { TaskService } from './task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'StarterApp';
   
  constructor(private taskService: TaskService) { }

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
}
