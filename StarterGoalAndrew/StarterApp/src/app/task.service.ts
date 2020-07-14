import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private webReqService: WebRequestService) { }

  createTable(title: string) {
    //we want to send a web request to creat a table of data
    return this.webReqService.post('list', { title });
  }
}
  