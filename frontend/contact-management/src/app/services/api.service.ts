import { Injectable } from '@angular/core';
import { FetchService } from './fetch.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private fetchService: FetchService) {

    this.fetchService.setBaseUrl("http://localhost:3000/api");
  }

  async getAll() {

    return await this.fetchService.ajax("/");
  }

  async create (data: any) {

    return await this.fetchService.ajax("/contact/create", data);
  }
//   async searchRequest(q: string) {

//     return await this.fetchService.ajax("/post/search?q=" + q);
//   }

  async getOneById (id: string) {

    return await this.fetchService.ajax("/contact/" + id);
  } 

  async getAllByUserId() {

      return await this.fetchService.ajax("/contact/user", null, "authorization");
  }
}
