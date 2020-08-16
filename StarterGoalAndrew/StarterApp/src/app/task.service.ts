import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private webReqService: WebRequestService) { }

  createTable(title: string) {
    //we want to send a web request to creat a table of data
    return this.webReqService.post('autofetch', { title });
  }
  clearData(title: string) {
    //we want to send a web request to creat a table of data
    return this.webReqService.post('newarr', { title });
  }
  async fetchData(title: string) {
    //we want to send a web request to creat a table of data
    return this.webReqService.postPromise('fetchdata', { title });
  }
  async fetchPriceData(title: string) {
    //we want to send a web request to creat a table of data
    return this.webReqService.postPromise('fetchpricedata', { title });
  }
}
  